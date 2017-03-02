// create an array of names


var movieList = ["terminator", "starwars", "jaws", "batman", "titanic", "hangman", "inception", "up", "gladiator", "avatar", "goodfellas"];
// console.log(movieList);

var movie;
var guessedLetters = "";
var chancesLeft;
var correct;
var movieLength;
var movieString;
var wins = 0;
var losses = 0;
var splitMovie;
var remainingLetters = 0;
// set up an array of answers
var answerArray = [];




 // function newGame() {

     chancesLeft = 10;
     guessedLetters = "";
     movie = movieList[Math.floor(Math.random() * movieList.length)];
     splitMovie = movie.split("");

 // console.log(movie);
 // console.log(splitMovie);

     remainingLetters = movie.length;
     movieString = movie.substring;

 // console.log(remainingLetters);
 // document.write(movie.substring(0,10));

     for (var i = 0; i < splitMovie.length; i++) {
     answerArray[i] = "_";

  console.log(answerArray);
  }

     if (remainingLetters > 0) {
     var wordList = answerArray.join(" ");
  document.write(wordList)
}

 // }


     document.onkeyup = function(event) {
     var correct = 0;
     var guess = String.fromCharCode(event.keyCode).toLowerCase(); 
   document.write(guess);

   for (var i =0; i < movie.length; i++) {

   	if (guess == movie.substring(i,i+1)) {

   		correct++;

   		// console.log(correct);
   	}
   	}
   }

  if (correct === 0) {

    chancesLeft--;
  }

  console.log (chancesLeft);

 







