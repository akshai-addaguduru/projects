 #include <stdio.h>
   #include <stdlib.h>
   #include <string.h>
   #include <sys/types.h>
   #include <sys/socket.h>
   #include <netdb.h>


   int main(int argc, char *argv[]){

         printf("TCP Client program by Akshai Addaguduru for Lab 2 – SecAD- Spring 2019\n");
         if(argc!=3) {
         printf("Usage: %s <server> <port>\n", argv[0]);
         exit(0);
      }
        char *servername = argv[1];
        char *port = argv[2];
        if( strlen(servername) > 255 || strlen(port) > 5)
	{
        perror("Servername or port is too long.Please try again!\n");
        exit(1);
      }
       printf("Servername= %s, port=%s\n",argv[1],argv[2]);
       int sockfd =socket(AF_INET,SOCK_STREAM,0);
       if(sockfd<0){
	      perror("error in opening a socket\n");
	      exit(2);

      }
	printf("A socket is opened");
	struct addrinfo hints, *serveraddr;
	memset(&hints,0,sizeof hints);
	hints.ai_family = AF_INET;
	hints.ai_socktype =SOCK_STREAM;
	int dns_status = getaddrinfo(servername,port,&hints,&serveraddr);
	if(dns_status !=0){
	  //..
	  exit(3);
       }
	int connected = connect(sockfd, serveraddr->ai_addr,serveraddr->ai_addrlen);
        if(connected < 0){
        perror("Cannot connect to the server\n");
        exit(3);
 	}
	else
	printf("Connected to the server %s at port %s\n",servername, port);
	freeaddrinfo(serveraddr);

        char buffer[1024]; //define the buffer
        bzero(buffer,1024);
	printf("Enter your message to send:");
	fgets(buffer, 1024, stdin);
	int byte_sent = send(sockfd,buffer, strlen(buffer), 0);
	bzero(buffer,1024);
	int byte_received =
	recv(sockfd, buffer, 1024, 0);
	if(byte_received <0){
	perror("Error in reading");
	exit(4);
	}
	printf("Received from server: %s", buffer);
	//close(sockfd);
	return 0;

}
