var colors=[
    "blue",
    "red",
    "purple",
    "pink",
    "orange",
    "green",
    "black"
]
var colorArr=[];
var chosenColorIndex=0;
var wins=0;
var losses=0;
var guessesLeft=10;
var guessList=[];
var lettersGuessed=[];
var count=0;
var refresh=0;

var winsScore=document.getElementById("wins");
var lossesScore=document.getElementById("losses");
var wordToGuess=document.getElementById("word-to-guess");
var lettersGuessed2=document.getElementById("letters-guessed");
var guesses=document.getElementById("guesses-left");

function colorName(){
   const color=colors[Math.floor(Math.random()*colors.length)];
    console.log(color)

    chosenColorIndex=colors.indexOf(color);

    for (let index = 0; index < color.length; index++) {
        guessList.push("_");

        console.log(guessList)
    wordToGuess.innerHTML=guessList.join(" ");
    }
};

function chooseColor(){
    for (let index = 0; index < colors.length; index++) {
        const element = array[index];
        
    }
}

function resetGame(){
var wins=0;
var losses=0;
var guessesLeft=10;
var guessList=[];
var lettersGuessed=[];
var count=0;  


    winsScore.innerHTML = "Wins: " + wins;
   lossesScore.innerHTML = "Losses: " + losses;
   guesses.innerHTML = "Guesses left: " + guessesLeft;
   lettersGuessed.innerHTML = "Letters Guessed: " + lettersGuessed;

};

resetGame();
ch
