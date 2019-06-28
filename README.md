<h1 align="center">Welcome to Liri Command Prompt App 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/JustinConforti/liri-node-app#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/JustinConforti/liri-node-app/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/JustinConforti/liri-node-app/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
</p>


> LIRI is a one stop APP that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
Liri will perform these different actions using simple command words: "concert-this", "spotify-this-song", "movie-this", "do-what-it-says"
	
	1. Search any band's concert dates using the command <"concert-this"> <"band name"> format:
		* This command will manipulate information from the Band In Town API depending on what band name you searched, it will display: 
			- Venue name 
			- Country the venue is located
			- Time and Date (MM/DD/YYYY) of the five most recent concerts
	
	2. Search spotify using the command <"spotify-this-song"> <"artist/song"> format:
		* This command will manipulate information from Spotify's API depending on what artist/song you searched, it will display:
			- Artist name
			- Song name
			- External url of the song link
			- Album name the song is on (if any)

	3. Search OMDB using the command <"movie-this"> <"movie name"> format:
		* This command will manipulate information from OMDB's API depending on what movie you searched, it will display: 
			- Movie title
			- Movie year
			- IMDB movie rating
			- Rotten Tomato movie rating
			- Countries that the movie was released in
			- All languages the movie was created in
			- A short movie plot
			- Main actors/actress in the movie

	4. As a default if you use the "do-what-it-says" command, it will read the text from the random.txt file and perform the search
		* This command will read the file text and run the correct function 
			


**** Links to examples of each command, ran in VS Code Git Bash terminal ****

Concert-this Rascal Flatts: 
https://screenshot.net/l20llcv

Spotify-this-song Delicate: 
https://screenshot.net/r3n88cv

Movie-this Pulp Fiction:
https://screenshot.net/p62nncz

do-what-it-says from random.txt file: 
https://screenshot.net/lkgjjb9

Technologies Used: 
	
	NodeJS
	Axios
	Moment (Time format)
	Spotify API
	Band In Town API
	OMDB API
	dotenv
	readme-md-generator (created this pretty readme file)
	
		
	I created, developed, and manage this Liri App. Big thanks to all TA's and instructors as well as classmates that helped along the way!
		 

### 🏠 [Homepage](https://github.com/JustinConforti/liri-node-app#readme)


## Author

👤 **Justin Conforti**

* Github: [@Justinconforti](https://github.com/Justinconforti)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JustinConforti/liri-node-app/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Justin Conforti](https://github.com/Justinconforti).<br />
This project is [ISC](https://github.com/JustinConforti/liri-node-app/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_