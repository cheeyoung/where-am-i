#
#		OSS CEL directories, OS specific directories
#	 	O_H/ctx/bin ORA_PWFILE
#	20191112 Cheeyoung O	/opt/solarisstudio12.3
#	20190715 Cheeyoung O	/usr/bin:/bin, Linux
#	20181204 Cheeyoung O	/usr/sunos, /opt/freeware
#	20170801 Cheeyoung O	PS1 of bash, Linux
#	20170714 Cheeyoung O	Added /opt/SunStudio12/
#	20120714 Cheeyoung O	/usr/man
#	20110516 Cheeyoung O	Added COBDIR (/opt/cobol)
#	20090414 CheeYoung O	Added OBJECT_MODE=64
#	20081218 CheeYoung O	Added /usr/contrib
#	20080604 CheeYoung O	Added /opt/SunStudio8/SUNWspro
#	20080304 CheeYoung O	
#	20080220 CheeYoung O	Added /opt/langtools/
#	20080201 CheeYoung O	Added EDITOR
#	20080107 CheeYoung O	Added TMP
#	20071221 CheeYoung O	Check whether ORACLE_HOME or ORACLE_BASE is empty
#	20071205 CheeYoung O	lib32, lib, lib64 directory support
#	20071204 CheeYoung O	Added ORA_CLIENTTRACE_DIR 
#	20071121 CheeYoung O	print env vars after setting them
#				Added O_H/OPatch to PATH
#	20071120 CheeYoung O	Added /usr/lpp/X11/bin to PATH
#	20070917 CheeYoung O	HP-UX 11.23 IA64
#	20070903 CheeYoung O	/etc
#	20070901 CheeYoung O	O_H/perl/bin and man
#	20070901 CheeYoung O	HP Tru64 5.1
#	20070828 CheeYoung O	Added LANG
#	20070817 CheeYoung O	/usr/local/man, /opt/perf/bin of HP-UX
#	20070720 CheeYoung O	/usr/local/bin
#	20070718 CheeYoung O	/opt/ansic/share/man
#	20070706 CheeYoung O	IBM AIX 5.1, 5.3
#	20070425 CheeYoung O	IBM AIX 5.2
#	20070405 CheeYoung O	Added path for JDK/JRE
# 	20070403 CheeYoung O	Created, HP-UX 11.11, Solaris 9
printf "%s %s\n" "$0" "$1"

#
#
#
OS_NAME="`uname -s`"

#
#	parameters
#
DEFAULT_ORACLE_BASE="/app/oracle"
DEFAULT_ORACLE_HOME="$DEFAULT_ORACLE_BASE/rdbms/10.2.0"
if [ -z "$ORACLE_HOME" ]; then
	ORACLE_HOME="$DEFAULT_ORACLE_HOME"
fi
if [ -z "$ORACLE_BASE" ]; then
	ORACLE_BASE="$DEFAULT_ORACLE_BASE"
fi

printf "\n"
printf "%s\n" "$OS_NAME"
printf "\n"
printf "ORACLE_HOME=%s\n" "$ORACLE_HOME"
printf "ORACLE_BASE=%s\n" "$ORACLE_BASE"
printf "\n"
printf "ORACLE_SID=%s\n" "$ORACLE_SID"
printf "DISPLAY=%s\n" "$DISPLAY"

#
#	configuration
#

NLS_LANG="AMERICAN_AMERICA.US7ASCII"
TNS_ADMIN="$PWD"
TMP="$PWD"
ORA_CLIENTTRACE_DIR="$PWD"
FILENAME_JDBC_DRIVER="ojdbc5.jar"
#FILENAME_JDBC_DRIVER="classes12.zip"
export NLS_LANG TNS_ADMIN ORA_CLIENTTRACE_DIR

DIRECTORIES_ORACLE_BIN="$ORACLE_HOME/bin $ORACLE_HOME/jdk/bin $ORACLE_HOME/perl/bin $ORACLE_HOME/OPatch"
DIRECTORIES_ORACLE_MAN="$ORACLE_HOME/jdk/man $ORACLE_HOME/perl/man"

PS1='$USER@$HOST:$PWD $ '
export PS1

PATH=""
MANPATH=""
for DIRECTORY_ORACLE_BIN in $DIRECTORIES_ORACLE_BIN; do
	if [ -d "$DIRECTORY_ORACLE_BIN" ]; then
		if [ -z "$PATH" ]; then
			PATH="$DIRECTORY_ORACLE_BIN"
		else
			PATH="$PATH:$DIRECTORY_ORACLE_BIN"
		fi
	fi
done
for DIRECTORY_ORACLE_MAN in $DIRECTORIES_ORACLE_MAN; do
	if [ -d "$DIRECTORY_ORACLE_MAN" ]; then
		if [ -z "$MANPATH" ]; then
			MANPATH="$DIRECTORY_ORACLE_MAN"
		else
			MANPATH="$MANPATH:$DIRECTORY_ORACLE_MAN"
		fi
	fi
done

case "$OS_NAME" in
'OSF1')
	LANG="en_US.ISO8859-1"
	PATH="$PATH:/usr/bin:/usr/ccs/bin:/usr/local/bin"
	MANPATH="$MANPATH:/usr/share/man:/usr/local/man"
	LD_LIBRARY_PATH=$ORACLE_HOME/lib
	export LANG
	export PATH 
	export LD_LIBRARY_PATH 
	;;
'Linux')
#	LANG="en_US"
	LANG=POSIX
#	PS1="\A \$ORACLE_SID \u@\h:\w $ "
	EDITOR="/bin/vi"
#	PATH="$PATH:/usr/bin:/bin:/usr/local/bin"
	PATH="$ORACLE_HOME/bin:/usr/bin:/bin:/usr/local/bin"
	MANPATH="$MANPATH:/usr/share/man:/usr/local/man"
	LD_LIBRARY_PATH=$ORACLE_HOME/lib
	export LANG
#	export PS1
	export EDITOR
	export PATH MANPATH
	export LD_LIBRARY_PATH
	;;
'AIX')
	LANG=POSIX
	PATH="$PATH:/usr/bin:/usr/ccs/bin:/usr/local/bin"
	PATH="$ORACLE_HOME/bin:/usr/bin:/usr/ccs/bin:/usr/local/bin"
	MANPATH="$MANPATH:/usr/share/man:/usr/local/man:/opt/freeware/man"

	PATH="$PATH:/etc:/usr/lpp/X11/bin"
	if [ -d "/usr/vac" ]; then
		PATH="$PATH:/usr/vac/bin"
		MANPATH="$MANPATH:/usr/vac/man"
	fi
	if [ -d "/usr/lpp/cobol" ]; then
		PATH="$PATH:/usr/lpp/cobol/bin"
	fi
	OBJECT_MODE=64
	if [ -d "$ORACLE_HOME/lib32" ]; then
		LIBPATH=$ORACLE_HOME/lib:$ORACLE_HOME/lib32
		OBJECT_MODE=64
	elif [ -d "$ORACLE_HOME/lib64" ]; then
		LIBPATH=$ORACLE_HOME/lib:$ORACLE_HOME/lib64
		OBJECT_MODE=32
	fi
	export LANG
	export PATH MANPATH
	export LIBPATH
	export OBJECT_MODE
	;;
'HP-UX')
	LANG=POSIX
	PATH="$PATH:/usr/bin:/usr/ccs/bin:/usr/local/bin"
	MANPATH="$MANPATH:/usr/share/man:/usr/local/man"

	PATH="$PATH:/opt/langtools/bin:/usr/contrib/bin"
	MANPATH="$MANPATH:/opt/langtools/share/man:/usr/contrib/man"

	if [ -d "/opt/ansic" ]; then
		PATH="$PATH:/opt/ansic/bin"
		MANPATH="$MANPATH:/opt/ansic/share/man"
	fi
	if [ -d "/opt/perf/bin" ]; then
		PATH="$PATH:/opt/perf/bin"
	fi
	PATH="$PATH:/usr/bin/X11"
	if [ -d "$ORACLE_HOME/lib32" ]; then
		SHLIB_PATH=$ORACLE_HOME/lib32
		LD_LIBRARY_PATH=$ORACLE_HOME/lib
	elif [ -d "$ORACLE_HOME/lib64" ]; then
		SHLIB_PATH=$ORACLE_HOME/lib
		LD_LIBRARY_PATH=$ORACLE_HOME/lib64
	fi
	if [ -d "/opt/cobol" ]; then
		COBDIR=/opt/cobol
		PATH="$PATH:$COBDIR/bin"
		LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$COBDIR/lib"
		export	COBDIR
	fi
	export LANG
	export PATH MANPATH
	export SHLIB_PATH LD_LIBRARY_PATH 
	;;
'SunOS')
	#LANG="en_US.ISO8859-1"
	LANG="C"
	PATH="$PATH:/usr/sunos/bin:/usr/bin:/usr/ccs/bin:/usr/local/bin"
	MANPATH="$MANPATH:/usr/sunos/man:/usr/share/man:/usr/local/man"
	if [ -d "/opt/solarisstudio12.3" ]; then
		PATH="$PATH:/opt/solarisstudio12.3/bin"
		MANPATH="/opt/solarisstudio12.3/man:$MANPATH"
	elif [ -d "/opt/SunStudio12/SUNWspro" ]; then
		PATH="$PATH:/opt/SunStudio12/SUNWspro/bin"
		MANPATH="/opt/SunStudio12/SUNWspro/man:$MANPATH"
	elif [ -d "/opt/SunStudio8/SUNWspro" ]; then
		PATH="$PATH:/opt/SunStudio8/SUNWspro/bin"
		MANPATH="/opt/SunStudio8/SUNWspro/man:$MANPATH"
	elif [ -d "/opt/SUNWspro6u2" ]; then
		PATH="$PATH:/opt/SUNWspro6u2/bin"
		MANPATH="$MANPATH:/opt/SUNWspro6u2/man"
	fi
	if [ -d "$ORACLE_HOME/lib32" ]; then
		LD_LIBRARY_PATH=$ORACLE_HOME/lib32
		LD_LIBRARY_PATH_64=$ORACLE_HOME/lib
	elif [ -d "$ORACLE_HOME/lib64" ]; then
		LD_LIBRARY_PATH=$ORACLE_HOME/lib
		LD_LIBRARY_PATH_64=$ORACLE_HOME/lib64
	fi
	export LANG
	export PATH MANPATH
	export LD_LIBRARY_PATH LD_LIBRARY_PATH_64
	;;
*)
	printf "% is not supported.\n" "$OS_NAME" 
	;;
esac

CLASSPATH="$ORACLE_HOME/jdbc/lib/$FILENAME_JDBC_DRIVER"
export CLASSPATH=".:$CLASSPATH"

printf "\n"
printf "TNS_ADMIN=%s\n" "$TNS_ADMIN"
printf "NLS_LANG=%s\n" "$NLS_LANG"
printf "LANG=%s\n" "$LANG"
printf "EDITOR=%s\n" "$EDITOR"
printf "\n"
printf "PATH=%s\n" "$PATH"
printf "LD_LIBRARY_PATH=%s\n" "$LD_LIBRARY_PATH"
printf "LD_LIBRARY_PATH_64=%s\n" "$LD_LIBRARY_PATH_64"
printf "SHLIB_PATH=%s\n" "$SHLIB_PATH"
printf "LIBPATH=%s\n" "$LIBPATH"
printf "\n"
printf "MANPATH=%s\n" "$MANPATH"
printf "CLASSPATH=%s\n" "$CLASSPATH"
printf "\n"
printf "TMP=%s\n" "$TMP"
printf "ORA_CLIENTTRACE_DIR=%s\n" "$ORA_CLIENTTRACE_DIR"
printf "\n"

umask 027
