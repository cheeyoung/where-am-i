/*
    20210818 Created
*/
#include <pthread.h>
#include <unistd.h>  /* getpid and getppid */
#include <stdio.h>

int get_pids(void)
{
    pthread_t tid ;
    pid_t pid ;

    int rv ;  /* Return Value */
    int errno ;  /* Linux */

    tid = pthread_self() ;
    printf("DEBUG: pthread_self returned %lx\n", tid) ;
    pid = getpid() ;
    printf("DEBUG: getpid returned %d\n", pid) ;
    pid = getppid() ;
    printf("DEBUG: getppid returned %d\n", pid) ;
}
