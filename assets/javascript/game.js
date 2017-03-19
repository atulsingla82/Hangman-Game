// create an array of movie names
var wordsList = [
    "mario",
    "luigi",
    "bowser",
    "wario",
    "donkeykong",
    "yoshi",
    "toad",
    "peach",
    "daisy",
    "blueshell",
    "birdo"
];
// console.log(wordsList);


// Word chosen
var chosenWord = "";
// Will break letters into individual letters.
var lettersInChosenWord = [];
// Number of blanks based on the  random word picked.
var numBlanks = 0;
//Mix of blansk and raight guesses
var blanksAndSuccesses = [];
// Holds all the incorrect guesses.
var wrongGuesses = [];

// Game Counters 
var wins = 0;
var losses = 0
var numGuesses = 10;

//audio
var audio = document.createElement("audio");
audio.setAttribute('src', "assets/audio/mario.mp3");



// Function to start game 
//========================
audio.play();

function startGame() {

    numGuesses = 10;

    // Word Chosen at random 
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    //Split the chosen word into individual letters.
    lettersInChosenWord = chosenWord.split("");
    // Total number of blanks in the word.
    numBlanks = lettersInChosenWord.length;

    // console.log(chosenWord);
    // console.log(lettersInChosenWord);
    // console.log(numBlanks);

    // RESET the blanks and success at each round .
    blanksAndSuccesses = [];
    // RESET the wrong guesses in each round .
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // console.log(blanksAndSuccesses);

    // Prints the guesses left to 10
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // Prints the "blanks" at the start of the game ;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    //
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


}

// Function to check for letters 
//===============================

function checkLetters(letter) {
    // Set boolean to check if any letter was found in the chosen word.
    var letterInWord = false;

    // Run a for loop 
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {
            // if letter in word is true 
            letterInWord = true;
        }

    }

    if (letterInWord) {

        for (i = 0; i < numBlanks; i++) {

            if (chosenWord[i] === letter) {

                blanksAndSuccesses[i] = letter;
            }
        }

        console.log(blanksAndSuccesses);
    } else {

        wrongGuesses.push(letter);
        numGuesses--;
    }

}


function roundComplete() {

    // console.log("Wins: " + wins + " | Losses:" + losses + "| NumGuesses:" + numGuesses);

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        wins++;



        document.getElementById("win-counter").innerHTML = wins;

        startGame();
    } else if (numGuesses === 0) {

        losses++;





        document.getElementById("loss-counter").innerHTML = losses;

        startGame();
    }
}
startGame();

document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);

    roundComplete();
};
