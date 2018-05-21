 // Variables for the game to function. First variable creates an array that lists all of the options of the alphabet.
 let gameChoices = [
        "a", "b", "c", "d", "e",
        "f", "g", "h", "i", "j", 
        "k","l", "m", "n", "o", 
        "p", "q", "r", "s", "t", 
        "u", "v", "w", "x","y", "z", ];
let wins = 0;
let losses = 0;
let guessesLeft = 50;
let letterPicked = [];


 // This variable randomly chooses a choice from the options array. This is the Computer's guess.
   let gameLetter = gameChoices[Math.floor(Math.random() * gameChoices.length)].toLowerCase();

   gameChoices.pop();
   console.log(gameLetter)
//Calculations
   function reset() {
       guessesLeft = 50;
       letterPicked = []; 
       gameLetter = gameChoices[Math.floor(Math.random() * gameChoices.length)].toLowerCase();
       console.log(gameLetter) 
   }

    // This function is run whenever the user presses a key. 
    document.onkeyup = function(event) {
    // This variable determines which key was pressed.
   let userGuess= event.key.toLowerCase();

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
   
    document.getElementById("userGuesshtml").innerHTML = userGuess;
    document.getElementById("winshtml").innerHTML = wins;
        
    document.getElementById("losseshtml").innerHTML = losses;

    document.getElementById("guessesLefthtml").innerHTML = guessesLeft;
     

function prepend(userGuess) {

    document.getElementById("userGuesshtml").innerHTML = picked.join(", ");
  
  }

  if (userGuess === gameLetter) {
      wins++;
      alert("Yes, the letter was" + gameLetter.toLowerCase() + "you're psychic!");
      reset ();
  } else {
      guessesLeft--;
      console.log(guessesLeft);
      letterPicked.push(userGuess);
      prepend(userGuess);
  }

  if (letterPicked < 1) {
      losses++;
      reset();
      alert("You lose! Game over, try again.");
  }

}


  