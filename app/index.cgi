#!/bin/bash 
echo Content-type: text/html
echo ""
## make POST and GET stings 
## as bash variables available
if [ ! -z $CONTENT_LENGTH ] && [ "$CONTENT_LENGTH" -gt 0 ] && [ $CONTENT_TYPE != "multipart/form-data" ]; then
read -n $CONTENT_LENGTH POST_STRING <&0
eval `echo "${POST_STRING//;}"|tr '&' ';'`
fi
eval `echo "${QUERY_STRING//;}"|tr '&' ';'`

## decode URL-encoding
urldecode() { : "${*//+/ }"; echo -e "${_//%/\x}"; }

export LC_ALL="en_US.UTF-8"

recipe=( $(ls /var/www/html/data/*) )
ran=$(( RANDOM % ${#recipe[@]} ))
ran=$(( RANDOM % ${#recipe[@]} ))

if echo "$HTTP_USER_AGENT" | grep -q 'curl\|wget\|http';then
  /usr/games/lolcat -f ${recipe[$ran]}
else
  cat /var/www/html/web
fi

