var Twitter = require('twitter');

//var spotify = require("spotify");

var request = require("request");

var fs = require('fs');

// get keys 
var Keys = require('./keys.js');

var movieApi = "40e9cece"

//var randomSong;


var twitterconsum = Keys.consum;

//commands

console.log("Please Type one of the following: my-tweets, movie-this then the movie you want")


// search / commands

var command = process.argv[2];






//command to type after node liri.js my-tweets

if (command === 'my-tweets') {

    var name = {
        screen_name: "codemoji123"
    };



    twitterconsum.get("statuses/user_timeline", name, function(error, tweets, response) {
        if (!error) { console.log("There was an error")

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

// movie

if (command === "movie-this") {
    var movie = process.argv[3];
    request("http://www.omdbapi.com/?apikey=" + movieApi + "&t=" + movie, function(error, response, body) {
        if (error) {
            console.log("error:", error);
        } else {

            console.log(`Title: ${JSON.parse(body).Title}`);
            console.log(`Year: ${JSON.parse(body).Year}`);
            console.log(`Country: ${JSON.parse(body).Country}`);
            console.log(`Language(s): ${JSON.parse(body).Language}`);
            console.log(`Plot: ${JSON.parse(body).Plot}`);
            console.log(`Actors: ${JSON.parse(body).Actors}`);
        }
    });
}

// spotify was giving me problems

/*// spotify

  var search = process.argv[3];

if (search === 'spotify-song') {

        spotifyPlay();
    }
    // spoti
function spotifyPlay() {
    console.log("Its time to party with some music");

    var searchMusic;
    if (search === undefined) {
        console.log("Please try again with something that we really do have in our system");
    } else {
        searchMusic = search; //Finds user input
    }

    spotify.search({ type: "track", query: searchMusic }, function(err, data) {
        if (err) {
            console.log(err);
            return;
        } else if (data.error) {
            console.log(data);
            return;
        } else {
            console.dir(data);
            // console.log("Artist: " + data.tracks.items[0].artists[0].name);
            // console.log("Song: " + data.tracks.items[0].name);
            // console.log("Album: " + data.tracks.items[0].album.name);
            // console.log("Preview here: " + data.tracks.items[0].preview_url);
        }

    })

}


 if (command === 'do-what-it-says') {
        
    };

function dowhat() {
    fs.readFile('random.txt', 'utf8', function(err, data) {

        var dataArr = data.split(","); randomSong = dataArr[1];});
    

    function spotifyNow() {
        console.log("Its time to party with some music");

        var searchRandom;
        if (search === undefined) {
            console.log("Please try again with something that we really do have in our system");
        }

        spotify.search({ type: "track", query: randomSong }, function(err, data) {
            if (err) {
                console.log(err);
                return;
            } else if (data.error) {
                console.log(data);
                return;
            } else {
                console.dir(data);
                // console.log("Artist: " + data.tracks.items[0].artists[0].name);
                // console.log("Song: " + data.tracks.items[0].name);
                // console.log("Album: " + data.tracks.items[0].album.name);
                // console.log("Preview here: " + data.tracks.items[0].preview_url);
            }




    });

};
*/