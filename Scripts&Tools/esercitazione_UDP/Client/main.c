// CLIENT

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>

#define BUF_SIZE 30

void error_handling(char *message);
void send_message(char* msg);

int main(int argc, char *argv[])
{
    int temp_counter = 0;
    while (1)
    {
        send_message("Message");
        if (temp_counter == 5)
        {
            send_message("Cur_message");
            temp_counter = 0;
        } else
        {
            send_message("Message");
        }
        temp_counter++;
    }    
    return 0;
}

void error_handling(char *message)
{
    fputs(message, stderr);
    fputc('\n', stderr);
    exit(1);
}

void send_message(char* msg)
{
    int sock, str_len;
    char message[BUF_SIZE];
    struct sockaddr_in serv_addr;    
    socklen_t addr_sz;
    sock = socket(PF_INET, SOCK_DGRAM, 0);
    if (sock == -1)
        error_handling("Socket() error");
    memset(&serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    serv_addr.sin_port = htons(1337);
    printf("Sending %s with len %ld\n", msg, strlen(msg));
    memset(message, 0, BUF_SIZE);
    memcpy(message, msg, strlen(msg));
    sendto(sock, message, strlen(message), 0, (struct sockaddr *)& serv_addr, sizeof(serv_addr));
    close(sock);    
    sleep(1);
}