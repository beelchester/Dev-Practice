use leptos::*;
use leptos_meta::*;

use crate::model::conversation::{Conversation, Message};

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context(cx);

    let (conversation, set_conversation) = create_signal(cx, Conversation::new()); // like state

    // send action, more like a function, what to do when user sends a message
    let send = create_action(cx, move |new_msg: &String| {
        let user_msg = Message {
            user: true,
            text: new_msg.clone(),
        };
        set_conversation.update(|c| {
            c.messages.push(user_msg);
        })
    });

    view! { cx,
        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Stylesheet id="leptos" href="/pkg/leptos_start.css"/>

        // sets the document title
        <Title text="Rusty llama"/>
        // <ChatArea conversation/>
        // <TypeArea send/>

    }
}
