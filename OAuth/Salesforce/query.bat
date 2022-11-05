SET API_VER=v55.0
SET OBJ_NAME=Contact
SET SOQL01=services/data/%API_VER%/query/?q=SELECT+Id+FROM+Contact
SET LIST_FIELDS=services/data/%API_VER%/sobjects/%OBJ_NAME%/describe/
SET LIST_OBJS=services/data/%API_VER%/sobjects/
SET R_VERSIONS=services/data/
SET SF_RESOURCE=%SOQL01%

SET MY_SF_DOMAIN=...-dev-ed.develop
SET SF_HOSTNAME=%MY_SF_DOMAIN%.my.salesforce.com
SET URI=https://%SF_HOSTNAME%/%SF_RESOURCE%

SET CMD=curl

REM %CMD% %URI%
%CMD% --trace-ascii %CMD%.trc --trace-time --ssl-no-revoke^
 -H "Authorization: Bearer 00D5g00000I359e!AQcAQEOLKu9olVVXRmVyTLzg0Uj61viRKb_Q.pXNsEv8FhqSsJOtI9eVr9JWmBvKppVuHVaY6Ml0lc84_z0GAeJKR5_7qzqd"^
 -H "X-PrettyPrint:1"^
 %URI%
REM > %CMD%_out.txt
SET ERR_LVL=%ErrorLevel%
echo %CMD% returned %ERR_LVL%
