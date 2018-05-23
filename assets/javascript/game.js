//establlish array and variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var userChoice = [];
var randomCharacterVar;
var computerChoice;
var wins = 0;
var losses = 0; 
var guessesLeft = 10;
var guessesSoFarVar = [];

// console.log(options);

//call function for computer choice
randomCharacter();

// //user chooses one character a-z and we capture those choices
document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode);

        // .toLowerCase();
        userChoice = userChoice.toLowerCase();

        console.log(userChoice);

    // //compare choices and determine a win or loss or tie - this is Lisa's code to emulate perhaps
    if (userChoice === computerChoice) {
        alert("Winner winner Chicken Dinner!");
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
        randomCharacter();
        guessesLeft = 10;
        guessesSoFarVar = "Let's try this again!!";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
    } else if (guessesLeft > 0){
        //CHRIS FEEDBACKpush and then loop to display
        guessesSoFarVar.push(" " + userChoice);
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        
        // console.log(userChoice); 
    }
    else {
        // increment losses print loses to screen 
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;

        //restart game
        randomCharacter();
        //reset guesses left to 10
        guessesLeft = 10;
        guessesSoFarVar = "Let's try this again!!";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
        
    }
    // console.log(wins);    
    }
    



// //computer chooses one random character a-z - used math random formula to create computer choice (computer to make a choice)
function randomCharacter() {
    var randomNumber = Math.floor(Math.random() * 
        options.length);
    computerChoice = options[randomNumber];
    
    console.log(computerChoice);
}
