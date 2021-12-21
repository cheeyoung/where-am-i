#!/usr/bin/ksh
#
# 21 Dec 2021 printf
# 31 Jan 2003 Solaris 8
# 21 Dec 2003 Solaris 2.6

DEVICE=iprb0
#DEVICE=hme0
CLIENT_HOSTNAME=""
SERVER_HOSTNAME=""
HOSTS="$CLIENT_HOSTNAME and ( $SERVER_HOSTNAME )"
LEN_PACKET=0
NUM_PACKETS=100
CMD=snoop
RAW_FILE="$CMD.raw"
OS_REL="`uname -r`"

if [ "$OS_REL" == "5.8" ] ;
then
  CMD_OPTIONS="-o $RAW_FILE -d $DEVICE -q -t a host $HOSTS"
# -c $NUM_PACKETS -r
elif [ "$OS_REL" == "5.6" ] ;
then
  CMD_OPTIONS="-o $RAW_FILE -d "$DEVICE -t a host $HOSTS and not port 23"
else
  printf "$OS_REL is not supported.\n"
  exit 1 ;
fi

if [ -e "$RAW_FILE" ] ;
then
  printf "%s exists.","$RAW_FILE"
  exit 1 ;
fi

CMD_LINE="$CMD $CMD_OPTIONS"
printf "%s ...\nPress Control-C to stop","$CMD_LINE"
$CMD_LINE
RC=$?
printf "%s returned %s\n","$CMD","$RC"
