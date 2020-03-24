// Array of all movies in playlist
// var D_D_Movies = ['Outbreak','Contagion','28 Days Later','28 Weeks Later','12 Monkeys','I Am Legend',
//                   'Rise of the Planet of the Apes','The Andromeda Strain','Cabin Fever','Flu','Deranged','Blindness'];  
// // Array might require stringification to be used in a AJAX call, made variable just in case
// //var D_D_json = JSON.stringify(D_D_Movies);

// for(i = 0; i < D_D_Movies.length; i++) { 

//   var imbbAPI = "c45c8f7d90msh2875850ffd544ffp1dc202jsn45c649435346"
//   var imdbURL = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + D_D_Movies[i] +   
  
//   $.ajax({
//     url: imdbURL,
//     method: "GET"
//   }).then(function(response)  

  $(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });     
