// A simple rock paper scissor game played in the console
// rock = 0, paper = 1, scissors = 2

// Randomly choosing for the computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
};

// Asking the player for their choice
function getPlayerChoice() {
    let choice = prompt("Choose rock, paper, or scissors");

    // Changing the players choice to a number
    switch(choice.charAt(0).toLowerCase()) {
        case "r":
            choice = 0;
            break;
        case "p": 
            choice = 1;
            break;
        case "s":
            choice = 2;
            break;
        default:
            console.log("Invalid choice. Assigning rock");
            choice = 0;
    }
    return choice;
};

// Determine the winner of a single game
function playGame(comp, player) {
    // Find out who won
    if(comp === player){
        return "It's a tie.";
    } else if (comp > player || comp === 0 && player === 2) {
        score -= 1;
        return "The computer wins.";
    } else {
        score += 1;
        return "You won!";
    }
};

// Calls the playGame function 5 times for a tournament
function game() {
    for( let i = 0; i < 5; i++) {
        // Get choices
        let compChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        
        // Display choices
        console.log(`You chose ${choiceArray[playerChoice]}. The computer chose ${choiceArray[compChoice]}.`)
    
        // Play the game and show results
        let result = playGame(compChoice, playerChoice);
        console.log(result);
    
    };    
};

let choiceArray = ["rock", "paper", "scissors"]    // for converting numbers to choices
let score = 0;                                     // if this is >0 at end then player wins

// Start the tournament
game();

// Show the overall result of the games
if (score > 0) {
    console.log("You won the tournament!")
} else {
    console.log("You did not win the tournament.")
}