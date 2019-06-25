require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: '37340d9618ba4c1e84beb3ae7d06185d',
  secret: 'a23d4d4c8af249b08b5d2b03989b132b'
});
const axios = require('axios');

// global variables as well as "if" statement for what command the user wants
let bandName = ""
let artistName = "";
let movieInput = ""

let command = process.argv[2]
console.log(process.argv)

    if (command === "concert-this") {
        console.log("if statement here")
        bandInTownAPI()
        return;
    }
    if (command === "spotify-this-song") {
        console.log("spotify if statement here")
        spotifyAPI()
        return;
    }
    if (command === "movie-this") {
        console.log("omdb if statement here")
        omdbAPI()
        return;
    }

// Band In Town API Manipulation :

function bandInTownAPI() {

    for (let i = 3; i < process.argv.length; i++) {
        artistName += process.argv[i] + " "
    }
    console.log(artistName)
    let newArtistName = artistName.trim()
    console.log(newArtistName)

axios
.get("https://rest.bandsintown.com/artists/"+newArtistName+"/events?app_id=codingbootcamp")
  .then(function(response) {
    for (let i = 1; i < 6; i++) {
    nameOfVenue = (response.data[i].venue.name);
    locationOfVenue = (response.data[i].venue.country + ", " + response.data[i].venue.city)
    dateOfVenue = (response.data[i].datetime)
    console.log("-----------------------------")
    console.log("Details to Event #" +[i])
    console.log("Event name:  " +nameOfVenue)
    console.log("Event location:  " +locationOfVenue)
    console.log("Event date:  " +dateOfVenue)
    console.log("-----------------------------")
    }
    })
    .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    }

    //Spotify API Manipulation Starts Here :

function spotifyAPI() {

    for (let i = 3; i < process.argv.length; i++) {
        bandName += process.argv[i] + " "
    }
    let newBandName = bandName.trim()
    spotify.search({ type: 'track', query: newBandName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0])
      console.log(data.tracks.items[0].artists[0].name);
      console.log(data.tracks.items[0].name)
      console.log(data.tracks.items[0].external_urls)
      console.log(data.tracks.items[0].album.name)
      });

    }

function omdbAPI() {
    for (let i = 3; i < process.argv.length; i++) {
        movieInput += process.argv[i] + " "
    }

axios.get("http://www.omdbapi.com/?t="+movieInput+"&y=&plot=short&apikey=trilogy")
.then(function(response) {

   console.log(movieInput)
   console.log(response.data.Title);
   console.log(response.data.Year);
   console.log(response.data.imdbRating)
   console.log(response.data.Ratings[1])
   console.log(response.data.Country)
   console.log(response.data.Language)
   console.log(response.data.Plot)
   console.log(response.data.Actors)

}) //will get information from omdb api and console.log all information that was retrieved
.catch(function(error) {
   if (error.request){
       console.log(error.request)
   }
});
}