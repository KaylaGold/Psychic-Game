//Establish array and variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var userChoice = [];
var randomCharacterVar;
var computerChoice;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFarVar = [];


//Call function for computerChoice to return a random character
randomCharacter();

//User chooses one character a-z and we capture those choices
document.onkeyup = function (event) {
    var userChoice = String.fromCharCode(event.keyCode);

    // .toLowerCase() to convert the string to lowercase letters
    userChoice = userChoice.toLowerCase();

    console.log(userChoice);

    //Compare choices and determine a win or loss 
    if (userChoice === computerChoice) {
        alert("Winner Winner Chicken Dinner!");
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
        randomCharacter();
        guessesLeft = 10;
        guessesSoFarVar = "Let's try this again!";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
    } else if (guessesLeft > 0) {
        guessesSoFarVar.push(" " + userChoice);
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        // console.log(userChoice); 
    }
    else {
        //Increment losses print losses to screen 
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;

        //Restart game
        randomCharacter();
        //Reset guesses left to 10
        guessesLeft = 10;
        guessesSoFarVar = "Let's try this again!";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];

    }
    // console.log(wins);    
}




//Computer chooses one random character a-z - used math random formula to create computerChoice (computer to make a choice)
function randomCharacter() {
    var randomNumber = Math.floor(Math.random() *
        options.length);
    computerChoice = options[randomNumber];

    console.log(computerChoice);
}
