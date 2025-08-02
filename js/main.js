// game choices in an array
const gameOptions = ['Bear', 'Ninja', 'Hunter'];

// make computer choice random
const randomIndex  = Math.floor(Math.random() * gameOptions.length);

// variable for the computers choice
let computerChoice; 

// Review each of the options from the array 
for (let i = 0; i < gameOptions.length; i++) {
    console.log(gameOptions[i]);

    // Extract the value of the randomizer for the computer's choice
    if (i === randomIndex) {
        computerChoice = gameOptions[i];  
        break; // exit the loop
    }
}

// Display in the console the computer's choice
console.log('Computer picked: ' + computerChoice);

// Prompt for players name
let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:');

// show player's name in console
let amessage = `You have entered: ${playerName}`;
console.log('The players name is ' + playerName); 

let playAgain = true;

while (playAgain) {


    // Let's play message with players name
    let letsPlayMessage = playerName;
        alert('Hi ' + letsPlayMessage + ' let\'s play!!');

    // Ask player who they want to be
    let playerChoice = prompt('Who are you: Bear, Ninja or Hunter?');

    // Prep player's results
    let resultMessagePlayer = playerName + ', you picked ' + playerChoice + '. ';

    // Prep computer's results
    let resultMessageComputer = 'The computer picked ' + computerChoice + '. ';

    // varaible for the results to be displayed
    let gameResult = '';

    //find winner
    //if there is a tie
    if (
        playerChoice === 'Bear' ||
        playerChoice === 'Ninja' ||
        playerChoice === 'Hunter'
    ) {
        // Use SWITCH to determine outcome
        switch (playerChoice + '-' + computerChoice) {
            //if there is a tie
            case 'Bear-Bear':
            case 'Ninja-Ninja':
            case 'Hunter-Hunter':
                gameResult = "It's a tie!";
                break;

            // if the player wins   
            case 'Bear-Ninja':
            case 'Ninja-Hunter':
            case 'Hunter-Bear':
                gameResult = playerName + ', you win!';
                break;

            // if the computer wins
            case 'Ninja-Bear':
            case 'Hunter-Ninja':
            case 'Bear-Hunter':
                gameResult = 'Computer wins!';
                break;
        }

    //if there is a validation issue
    } else {
        gameResult = 'Invalid choice. Please choose Bear, Ninja, or Hunter.';
    }

    //Results in console
    console.log(resultMessagePlayer + resultMessageComputer + gameResult); 

    // Results in HTML
    document.getElementById('gameResult').innerHTML =  
        resultMessagePlayer + '<br>' + resultMessageComputer + '<br>' + gameResult;

//Play again?
playAgain = confirm(playerName + ', would you like to play again. Yes or No?');
}

if (playAgain === null) {
    alert('You canceled the game. Goodbye!');
}

alert('Thanks for playing, ' + playerName + '!');