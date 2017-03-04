// create an array of movie names


var movieList = ["terminator", "starwars", "jaws", "batman", "titanic", "hangman", "inception", "up", "gladiator", "avatar", "goodfellas"];
// console.log(movieList);

var movie;
var guessedLetters = "";
var chancesLeft;
var correct;
var movieString;
var wins = 0;
var losses = 0;
var splitMovie;
var remainingLetters = 0;
// set up an array of answers
var answerArray = [];



// new function 
function newGame() {

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

        // console.log(answerArray);

    }
    if (remainingLetters > 0) {
        var wordList = answerArray.join(" ");
        // console.log(wordList)

        var placeholder = document.getElementById("placeholder");
        placeholder.innerHTML = wordList;


    }


}

document.onkeypress = function(event) {
    var correct = 0;
    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(guess);
    console.log(movie);



    for (var i = 0; i < splitMovie.length; i++) {

        if (guess == movie.substring(i, i + 1)) {

            correct++;

            console.log(correct);


        }

    }

    if (correct === 0) {

        chancesLeft--;

        console.log(chancesLeft);
        var chancesremining = document.getElementById("chancesremining");
        chancesremining.innerHTML = chancesLeft;
    }



   if (answerArray.indexOf("_") == -1) {

        wins++;

        // console.log (wins);


    }


    if (chancesLeft === -1) {

        losses++;

    }


}


newGame();
