REM 
REM 
REM 
SET CLIENT_KEY=3MVG9fe4g9fhX0E4klvJKH5Vk5biJy7Tv8RWR.UYRiertUg2Bt8Gsnvj_JknTGF734MLF7uXb3IeWlW5GrRhq
SET CLIENT_SECRET=A17FA75FF8E6399930C18372BAC3BF649440AB169D51AC135B2A5EDA61DC1E0E
SET USER_NAME=...
SET USER_PASSWORD=...
SET USER_SECURITY_TOKEN=VS7ymZckqPujcd7loxPJVWatR
SET MY_SF_DOMAIN=...-dev-ed.develop
SET SF_HOSTNAME=%MY_SF_DOMAIN%.my.salesforce.com
SET URI=https://%SF_HOSTNAME%/services/data/
SET CMD=curl

%CMD% --trace-ascii %CMD%.trc --trace-time --ssl-no-revoke -X POST^
 -d grant_type=password^
 -d client_id=%CLIENT_KEY%^
 -d client_secret=%CLIENT_SECRET%^
 -d username=%USER_NAME%^
 -d password=%USER_PASSWORD%%USER_SECURITY_TOKEN%^
 https://login.salesforce.com/services/oauth2/token
SET ERR_LVL=%ErrorLevel%
echo %CMD% returned %ERR_LVL%
