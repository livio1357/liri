var Twitter = require('twitter');

var fs = require('fs');

// get keys 
var keys = require('./keys.js');


var twitterConsum = keys.consum

var command = process.argv[2];

if (command === 'my-tweets') {
	
  var name = {
    screen_name: "codemoji123"
};


 twitterConsum.get("statuses/user_timeline", name, function(error, tweets, response) {
    if (!error) {
      //Loop through each tweet inside response data
      for (var i = 0; i < tweets.length; i++) {
        console.log(`\nTweet ${i + 1}: ${tweets[i].text}`);
        console.log(`Created On: ${tweets[i].created_at}`);
        console.log("\n-------------------");
      }
    } else {
      console.log(error);
    }
  });
}