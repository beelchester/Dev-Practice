use futures::stream::StreamExt;
use libp2p::{gossipsub, mdns, noise, swarm::NetworkBehaviour, swarm::SwarmEvent, tcp, yamux};
use std::collections::hash_map::DefaultHasher;
use std::error::Error;
use std::hash::{Hash, Hasher};
use std::time::Duration;
use tokio::{io, io::AsyncBufReadExt, select};
use tracing_subscriber::EnvFilter;

// We create a custom network behaviour that combines Gossipsub and Mdns.
#[derive(NetworkBehaviour)]
struct MyBehaviour {
    gossipsub: gossipsub::Behaviour,
    mdns: mdns::tokio::Behaviour,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Initialize tracing, otherwise we won't see any logs.
    let _ = tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .try_init();

    // Create a Swarm to manage peers and events, and setting up its configuration.
    // swarm is the main entry point to libp2p. It is the object through which you
    // can access the network behaviour and send and receive messages to peers.
    let mut swarm = libp2p::SwarmBuilder::with_new_identity()
        .with_tokio()
        .with_tcp(
            tcp::Config::default(), // tcp is a transport protocol that libp2p uses to establish connections
            noise::Config::new, // noise is a secure handshake protocol that libp2p uses to establish secure connections
            yamux::Config::default, // yamux is a multiplexing protocol that libp2p uses to send multiple streams of data over a single connection (multiplexing)
        )?
        .with_quic() // quic is also a transport protocol, it is built on top of UDP and is faster than TCP because it has less overhead
        .with_behaviour(|key| {
            // A behaviour is a component that defines how the swarm should behave. It is a state machine that handles events and can send and receive messages.
            // To content-address message, we can take the hash of message and use it as an ID.
            // This ensures that no two messages of the same content will be propagated.
            // content-address message means that the message is identified by its content, not by its author.
            let message_id_fn = |message: &gossipsub::Message| {
                // message_id_fn is a function that takes a message and returns a message ID
                let mut s = DefaultHasher::new();
                message.data.hash(&mut s);
                gossipsub::MessageId::from(s.finish().to_string())
            };

            // Set a custom gossipsub configuration
            let gossipsub_config = gossipsub::ConfigBuilder::default()
                .heartbeat_interval(Duration::from_secs(10)) // This is set to aid debugging by not cluttering the log space
                // heartbeat_interval is the time between heartbeat messages. Heartbeat messages are sent to all peers to let them know that we are still alive.
                // If a peer does not receive a heartbeat message from us for a certain amount of time, it will assume that we are offline and disconnect from us.
                // it is like ping in TCP
                .validation_mode(gossipsub::ValidationMode::Strict) // This sets the kind of message validation. The default is Strict (enforce message signing)
                .message_id_fn(message_id_fn) // content-address messages. No two messages of the same content will be propagated.
                .build() // build the configuration
                .map_err(|msg| io::Error::new(io::ErrorKind::Other, msg))?; // Temporary hack because `build` does not return a proper `std::error::Error`.

            // build a gossipsub network behaviour
            let gossipsub = gossipsub::Behaviour::new(
                gossipsub::MessageAuthenticity::Signed(key.clone()), // it is signed by our private key
                gossipsub_config,
            )?;

            let mdns =
                mdns::tokio::Behaviour::new(mdns::Config::default(), key.public().to_peer_id())?;
            // mdns is a protocol that allows peers to discover each other on the same local network
            // without having to know their IP addresses. It is useful for local testing.
            // It is not used in production.
            Ok(MyBehaviour { gossipsub, mdns }) // return the behaviour
        })?
        .with_swarm_config(|c| c.with_idle_connection_timeout(Duration::from_secs(60))) // set the idle connection timeout to 60 seconds
        .build();

    // Create a Gossipsub topic
    let topic = gossipsub::IdentTopic::new("test-net"); // topic name
                                                        // in gossipsub a topic is a channel that peers can subscribe to
                                                        // subscribes to our topic
    swarm.behaviour_mut().gossipsub.subscribe(&topic)?;

    // Read full lines from stdin
    let mut stdin = io::BufReader::new(io::stdin()).lines();

    // Listen on all interfaces and whatever port the OS assigns
    swarm.listen_on("/ip4/0.0.0.0/udp/0/quic-v1".parse()?)?;
    swarm.listen_on("/ip4/0.0.0.0/tcp/0".parse()?)?;

    println!("Enter messages via STDIN and they will be sent to connected peers using Gossipsub");

    // Kick it off
    loop {
        select! { // select! macro allows us to wait for multiple futures at the same time
                  // it will wait for the first future to complete and then execute the corresponding branch
                  // if multiple futures complete at the same time, it will execute one of them randomly
                  // if none of the futures complete, it will wait until one of them completes
                  // in our case, we have two futures: stdin.next_line() and swarm.select_next_some()
                  // stdin.next_line() will complete when we enter a new line in the terminal
                  // swarm.select_next_some() will complete when a swarm event occurs
                  // this ensures that we can send messages and receive messages at the same time
            Ok(Some(line)) = stdin.next_line() => {
                if let Err(e) = swarm
                    .behaviour_mut().gossipsub // get the gossipsub behaviour
                    .publish(topic.clone(), line.as_bytes()) { // publish the message to the topic
                    println!("Publish error: {e:?}");
                }
            }
            event = swarm.select_next_some() => match event {
                SwarmEvent::Behaviour(MyBehaviourEvent::Mdns(mdns::Event::Discovered(list))) => {
                    for (peer_id, _multiaddr) in list {
                        println!("mDNS discovered a new peer: {peer_id}");
                        swarm.behaviour_mut().gossipsub.add_explicit_peer(&peer_id);
                    }
                },
                SwarmEvent::Behaviour(MyBehaviourEvent::Mdns(mdns::Event::Expired(list))) => {
                    for (peer_id, _multiaddr) in list {
                        println!("mDNS discover peer has expired: {peer_id}");
                        swarm.behaviour_mut().gossipsub.remove_explicit_peer(&peer_id);
                    }
                },
                SwarmEvent::Behaviour(MyBehaviourEvent::Gossipsub(gossipsub::Event::Message {
                    propagation_source: peer_id,
                    message_id: id,
                    message,
                })) => println!(
                        "Got message: '{}' with id: {id} from peer: {peer_id}",
                        String::from_utf8_lossy(&message.data),
                    ),
                SwarmEvent::NewListenAddr { address, .. } => {
                    println!("Local node is listening on {address}");
                }
                _ => {}
            }
        }
    }
}
