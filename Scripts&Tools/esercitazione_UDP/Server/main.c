// SERVER

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <time.h>

#define BUF_SIZE 30

void error_handling(char *message);
int compare_messages(char* msg1, char* msg2);
char* listen_to_network();
long long get_time_ns();

int main(int argc, char *argv[])
{
    char* msg1;
    char* msg2;
    long long start, inter, ricezione_completa;

    while (1)
    {
        start = get_time_ns();
        msg1 = listen_to_network();
        inter = get_time_ns();
        msg2 = listen_to_network();
        ricezione_completa = get_time_ns() - start;
        printf("Tempo di ricezione di entrambi i messaggi: %lldns ns\n", ricezione_completa);
        if (ricezione_completa > 2900000000LL)
        {
            printf("NO PACKAGES RECEIVED IN TIME: PACKAGES WERE LOST, WAITING NEXT COMMUNICATION\n----------------------------\n", ricezione_completa);
            
        } else 
        {
            printf("Intervallo tra messaggi: %lldns ns\n", get_time_ns() - inter);
            // printf("%s, %s\n", msg1, msg2);
             if (strlen(msg1) && strlen(msg2))
            {
                if(compare_messages(msg1, msg2))
                    printf("Messages ARE NOT the same!\nMSG1: %s\nMSG2: %s\n----------------------------\n", msg1, msg2);
                else
                    printf("Messages ARE the same!\nMSG1: %s\nMSG2: %s\n----------------------------\n", msg1, msg2);
            }
        }
    }
    return 0;
}

void error_handling(char *message)
{
    fputs(message, stderr);
    fputc('\n', stderr);
    exit(1);
}

int compare_messages(char* msg1, char* msg2)
{
    // printf("messagessss: %s, %s\n", msg1, msg2);
    // printf("compare: %d\n", strcmp(msg1,msg2));
    return strcmp(msg1, msg2);
}

long long get_time_ns()
{
    struct timespec ts;
    clock_gettime(CLOCK_REALTIME, &ts);
    return ts.tv_sec * 1000000000LL + ts.tv_nsec;
}

char* listen_to_network()
{
    int serv_sock, str_len;
    char message[BUF_SIZE];
    
    socklen_t clnt_addr_sz;
    struct sockaddr_in serv_addr, clnt_addr;
    serv_sock = socket(PF_INET, SOCK_DGRAM, 0);
    if (serv_sock == -1)
        error_handling("UDP socket creation error");
    memset(&serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    serv_addr.sin_port = htons(1337);
    if (bind(serv_sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) == -1)
        error_handling("bind() error");
    clnt_addr_sz = sizeof(clnt_addr);
    str_len = recvfrom(serv_sock, message, BUF_SIZE - 1, 0, (struct sockaddr *)&clnt_addr, &clnt_addr_sz);
    message[str_len] = 0;
    // printf("Message from client %s with len %d\n", message, str_len);
    
    char* output = (char*)malloc(strlen(message) + 1);
    strcpy(output, message);

    close(serv_sock);
    return output;
}

