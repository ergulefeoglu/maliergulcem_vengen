//Dependencies
var FB = require('fb'),
    fs = require('fs'),
    beautify = require("json-beautify"),
    url = require('url'),
    https = require('https'),
    qs = require('querystring');

//Create a new app via https://developers.facebook.com/apps/ 
//Then use your app id and app secret to populate the consts below
const clientId = "",
    clientSecret = "";
//Latitude and Longitude to be passed to getEventDataFromFB.js as cli args, 
//else use default values
var lat = process.argv[2] || "41.0370",
    long = process.argv[3] || "28.9851";
//Assign query value for FB api search from cli argv[4] or use default value
const qv = process.argv[4] || "konser";

//`fetchAccessToken` fetches access token to be used for api querying
function fetchAccessToken(cbFunc) {
    https.get("https://graph.facebook.com/oauth/access_token?client_id=" + clientId + "&client_secret=" + clientSecret + "&grant_type=client_credentials", (res) => {
        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];

        var error;
        if (statusCode !== 200) {
            error = new Error("Request Failed.\n" + "Status Code:  " + statusCode);
        }
        if (error) {
            console.log(error.message);
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            try {
                console.log(rawData);
                //`cbFunc` called here
                cbFunc(rawData);
            } catch (e) {
                console.log(e.message);
                return e.message;
            }
        });
    }).on("error", (e) => {
        console.log("Got error: " + e.message);
    });
}

//Declare `theAccessToken`
var theAccessToken;
//Invoke `fetchAccessToken with anonymous callback that populates `theAccessToken` variable
fetchAccessToken(function(accTok) {
    theAccessToken = accTok;
    doFBapiCall(qv);
});

//`doApiCall` makes call to FB api with defined values
function doFBapiCall(queryValue) {
    if (theAccessToken.indexOf("access_token") != -1) {

        FB.setAccessToken(theAccessToken.match(/\d+\|[a-zA-Z0-9]+/igm)[0]);

        FB.api("search?q=" + queryValue + "&type=place&center=" + lat + "," + long + "&distance=1000&fields=events{name,place,category_id,start_time,ticket_uri,photos{source},owner{category}}", "get", function(res) {
            if (!res || res.error) {
                console.log(!res ? "error occurred" : res.error);
                return;
            }
            console.log(res.data);
            var jsonString = "";
            var eventList = [];

            res.data.forEach(function(item, index) {
                try {
                    var eventsAtPlace = item.events.data;
                    eventsAtPlace.forEach(function(event) {
                        eventList.push(event);
                    });
                } catch (e) {
                    console.log(e.message);
                }
            });
            //Determine output path and file name
            fs.writeFile("../static/data/concertsFromFB.json", beautify(eventList, null, 2, 100), (err) => {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        });
    } else {
        throw new Error("Could not retrieve access_token, aborted api call");
    }
}