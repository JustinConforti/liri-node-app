require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

const axios = require('axios');


let artist = "arianna grande"
bandInTownAPI()
function bandInTownAPI() {
    // let nameOfVenue = [];
    // let locationOfVenue = [];
    // let dateOfVenue = [];

axios
.get("https://rest.bandsintown.com/artists/"+artist+"/events?app_id=codingbootcamp")
  .then(function(response) {
      console.log(response.data[0])
    for (let i = 1; i < 6; i++) {
    nameOfVenue = (response.data[i].venue.name);
    locationOfVenue = (response.data[i].venue.country + "," + response.data[i].venue.city)
    dateOfVenue = (response.data[i].datetime)
    console.log("-----------------------------")
    console.log("Details to Event #  " +[i])
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

    

