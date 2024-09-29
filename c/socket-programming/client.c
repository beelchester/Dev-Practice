#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
  // Create socket
  int sockfd = socket(AF_INET, SOCK_STREAM, 0);
  if (sockfd == -1) {
    perror("Socket creation failed");
    exit(EXIT_FAILURE);
  }

  struct sockaddr_in addr;
  addr.sin_family = AF_INET;
  addr.sin_port = htons(8080);

  // Convert IPv4 and IPv6 addresses from text to binary form
  if (inet_pton(AF_INET, "127.0.0.1", &addr.sin_addr) <= 0) {
    printf("\nInvalid address/ Address not supported \n");
    return -1;
  }

  // Connect to server
  if (connect(sockfd, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
    perror("Connection failed");
    exit(EXIT_FAILURE);
  }

  printf("Connected to server\n");

  // // Send data to server
  // const char *message = "Hello, server!";
  // if (send(sockfd, message, strlen(message), 0) == -1) {
  //   perror("Send failed");
  //   exit(EXIT_FAILURE);
  // }
  //
  // // Receive data from server
  // char buffer[1024] = {0};
  // if (recv(sockfd, buffer, sizeof(buffer), 0) == -1) {
  //   perror("Receive failed");
  //   exit(EXIT_FAILURE);
  // }
  //
  // printf("Server response: %s\n", buffer);

  // Close socket
  close(sockfd);

  return 0;
}
