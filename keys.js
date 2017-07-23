var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
//twitter
var consum = new Twitter({
    consumer_key: '0cbq656xYKESPT9h7sO3CIeCf',
    consumer_secret: 'Rmn5kzW0It4D5yPsnS9u3nB4ttdY6aDjLbqH0JSOc8mXV9UyDK',
    access_token_key: '746411886552309760-ifTI9rEcX3x5SvxD9jNffiGI8WcKjSC',
    access_token_secret: 'AsvbNMD1VflxDkn0Naadr5WHXhzmoTSJLcmZMzBnpMvRl'
});


// spotify

var spotify = new Spotify({
  id: '539f4fcc9ce24201b51c39bc8745d851',
  secret: 'a311e7086a274595b014cda72494e32c'
});

//export everywhere
module.exports.consum = consum;
module.exports.spotify = spotify;