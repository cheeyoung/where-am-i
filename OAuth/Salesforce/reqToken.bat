SET MY_SF_DOMAIN=...-dev-ed.develop
SET SF_HOSTNAME=%MY_SF_DOMAIN%.my.salesforce.com
SET URI=https://%SF_HOSTNAME%/services/data/
SET CMD=curl

REM %CMD% %URI%
%CMD% --trace-ascii %CMD%.trc --trace-time --ssl-no-revoke -X POST^
 -d grant_type=password^
 -d client_id=3MVG9fe4g9fhX0E4klvJKH5Vk5biJy7Tv8RWR.UYRiertUg2Bt8Gsnvj_JknTGF734MLF7uXb3IeWlW5GrRhq^
 -d client_secret=A17FA75FF8E6399930C18372BAC3BF649440AB169D51AC135B2A5EDA61DC1E0E^
 -d username=<username>^
 -d password=<password>VS7ymZckqPujcd7loxPJVWatR^
 https://login.salesforce.com/services/oauth2/token
SET ERR_LVL=%ErrorLevel%
echo %CMD% returned %ERR_LVL%
