/*
    20211022 Created
*/
#include <unistd.h>  /* pid_t */

typedef struct
{
    pid_t pid ;
    pid_t ppid ;
}   pinfo;

/* functions */
int get_pids(void) ;
