$(document).ready(function ($) {
// Array of all movies in playlist
var D_D_Movies = ['Outbreak','Contagion','28 Days Later','28 Weeks Later','12 Monkeys','I Am Legend',
                  'Rise of the Planet of the Apes','The Andromeda Strain','Cabin Fever','Flu','Deranged','Blindness'];  
let D_D_Posters = []
var slideShow = $("#CS-slideshow")

// Array might require stringification to be used in a AJAX call, made variable just in case
//var D_D_json = JSON.stringify(D_D_Movies); 

//Loop to run through array
for (i = 0; i < D_D_Movies.length; i++) {

// Ajax call settings. Looks hinky compared to other api setups, but it was the way the maker set up the code snippet.
// The method & url are the same, and the api key is already integrated in as a plus. 
var AC_settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + D_D_Movies[i],
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "c45c8f7d90msh2875850ffd544ffp1dc202jsn45c649435346"
	}
}

$.ajax(AC_settings).done(function (response) {
  console.log(response);  
  let {poster,title} = response
  let img = $('<img>');
  img.attr('src',poster); 
  // slideShow.append(img)
  D_D_Posters.push(poster)
});
} 
function changeSlide(index) {
if(index === D_D_Posters.length - 1){ 
  return(D_D_Posters[0]); 
  

} else return D_D_Posters[index + 1]
}


  // Functional javascript for the slideshow div  
$("#CS-slideshow > div:gt(0)").hide();
let posterIndex = 0
setInterval(function() { 
  let newPoster = changeSlide(posterIndex)
    slideShow.fadeOut(500) 
    setTimeout(function() {
      slideShow.attr('src',newPoster)
      .fadeIn(500)
    },500) 
   posterIndex ++
},  6000); 
});
