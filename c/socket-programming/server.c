#include <netinet/in.h>
#include <stdio.h>
#include <sys/_endian.h>
#include <sys/socket.h>
#include <unistd.h>

int main() {
  int f = socket(AF_INET, SOCK_STREAM, 0);
  printf("Socket file descriptor: %d\n", f);
  if (f == -1) {
    perror("socket error");
    return 1;
  }
  // f is the file descriptor of the socket we created
  // socket means the endpoint of a connection

  // address
  // address of the server where the client will connect
  // addr is a struct that implements the sockaddr_in struct
  // sockaddr_in is a struct that is a subset of sockaddr struct specially for
  // ipv4
  struct sockaddr_in addr;
  addr.sin_family = AF_INET; // addess family of ipv4
  addr.sin_port = htons(
      8080); // port number; htons is used to convert the
             // integer hostshort from host byte order to network byte order
  addr.sin_addr.s_addr =
      htonl(INADDR_ANY); // ip address; htonl is used to convert the integer
                         // hostlong from host byte order to network byte order
  // INADDR_ANY is a constant that represents the ip address of the server
  // When we don't know the IP address of our machine, we can use the special IP
  // address INADDR_ANY .

  // bind
  // binding means to associate the socket with the address
  // f is the file descriptor of the socket
  // (struct sockaddr *)&addr is the address of the server
  // this is a typecast because the bind function expects a pointer to sockaddr
  // struct and we are passing a pointer to sockaddr_in struct
  // &addr: This takes the address of the variable addr. It essentially gives
  // you a pointer to addr.
  // (struct sockaddr *): This is a typecast. It tells the compiler to treat the
  // address obtained in step 1 as a pointer to a structure of type struct
  // sockaddr.
  // sizeof(addr) is the size of the address
  int b = bind(f, (struct sockaddr *)&addr, sizeof(addr));
  if (b == -1) {
    perror("bind error");
    return 1;
  }
  // listen
  // listen for incoming connections
  // f is the file descriptor of the socket
  // 10 is the maximum number of connections that can be queued
  // when the server is busy
  // the server will accept the connections in the order they were received
  // and will reject the rest
  int l = listen(f, 10);
  if (l == -1) {
    perror("listen error");
    return 1;
  }
  printf("Server listening on port 8080...\n");

  // accept
  // accept incoming connections
  // this will block the program until a connection is received
  // it returns a new file descriptor of the new socket with same properties as
  // f
  // that is used to communicate with the client
  // It extracts the first connection request on queue of pending connections
  // for the listening socket, sockfd, creates a new connected socket, and
  // returns a new file descriptor referring to that socket so a new socket is
  // created for each client
  // more like a connection socket between client and
  // server's main socket (f)
  int new_socket;
  if ((new_socket = accept(f, (struct sockaddr *)&addr, (socklen_t *)&addr)) <
      0) {
    perror("accept");
    return 1;
  };
  printf("Connection accepted\n");

  // Close sockets
  close(f);
  close(new_socket);

  return 0;
}
