#!/usr/bin/ksh
#
# 21 Dec 2021 printf
# 31 Jan 2003 Solaris 8
# 21 Dec 2003 Solaris 2.6
#
# Page 69, Collecting a snoop sequence
# Sun Performance and Tuning, 2nd edition
#
# Page 82, Using Snoop
# HACK PROOFING, SUN SOLARIS 8
# SYNGRESS

CMD=snoop
RAW_FILE=$CMD.raw
OUT_FILE=$CMD.out

if [ -e "$OUT_FILE" ] ;
then
  printf "%s exists.\n","$OUT_FILE"
  exit 1 ;
fi

printf "Generating a report to %s from %s ...\n","$OUT_FILE","$RAW_FILE"
$CMD -x 0 -i "$RAW_FILE" > "$OUT_FILE"
RC=$?
printf "$CMD returned $RC\n"
