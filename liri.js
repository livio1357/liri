var Twitter = require('twitter');

var spotify = require("spotify");

var fs = require('fs');

// get keys 
var Keys = require('./keys.js');


var twitterconsum = Keys.consum

//commands

console.log("Please Type one of the following: my-tweets, spotify-song, movie-please")


// search / commands

var mytweets = process.argv[2];

var search = process.argv[3];


//command to type after node liri.js my-tweets

if (mytweets === 'my-tweets') {

  var name = {
    screen_name: "codemoji123"
};


 twitterconsum.get("statuses/user_timeline", name, function(error, tweets, response) {
    if (!error) {
      
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


function spotifyNow(){
  console.log("Its time to party with some music");

  var searchMusic;
  if(search === undefined){
    console.log("Please try again with something that we really do have in our system"); 
  }
  else{
    searchMusic = search; //Finds user input
  }

  spotify.search({type: "track", query: searchMusic}, function(err , data){
    if(err){
      console.log(err);
      return;
    } else if (data.error) {
      console.log(data);
      return;
    }

    else{
      console.dir(data);
      // console.log("Artist: " + data.tracks.items[0].artists[0].name);
      // console.log("Song: " + data.tracks.items[0].name);
      // console.log("Album: " + data.tracks.items[0].album.name);
      // console.log("Preview here: " + data.tracks.items[0].preview_url);
    }

  })

}