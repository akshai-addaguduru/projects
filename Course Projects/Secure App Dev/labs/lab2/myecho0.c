#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char * argv[]) 
{
	if(argv[1])
    	printf("%s",argv[1]);
	else
		printf("Usage: %s <input>\n",argv[0]);
}

