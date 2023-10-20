// A simple rock paper scissor game played in the console
// rock = 0, paper = 1, scissors = 2

// Randomly choosing for the computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
};

// Determine the winner of a single game
function playRound(comp, player) {
    if(comp === player){
        return "It's a tie.";
    } else if (comp > player || comp === 0 && player === 2) {
        compScore += 1;
        return "The computer wins.";
    } else {
        playerScore += 1;
        return "You won!";
    }
};

// Calls the playRound function 5 times for a tournament
function game(playerChoice) {
    // Display choices
    let compChoice = getComputerChoice();
    choices.textContent = `You chose ${choiceArray[playerChoice]}. The computer chose ${choiceArray[compChoice]}.`;

    // Play the game and show results
    let roundOutcome = playRound(compChoice, playerChoice);
    roundResults.textContent = roundOutcome;
    tournamentResults.textContent = `Your score: ${playerScore} Computer's score: ${compScore}`;

    // Announce a winner if someone reaches 5 points then reset scores
    if(playerScore >= 5) {
        tournamentResults.textContent = 'You have won 5 rounds. Congratulations! Resetting scores.';
        playerScore = 0;
        compScore = 0;
    } else if (compScore >= 5) {
        tournamentResults.textContent = 'The computer has won 5 rounds. Better luck next time. Resetting scores.';
        playerScore = 0;
        compScore = 0;
    }
};

let choiceArray = ["rock", "paper", "scissors"] // for converting numbers to choices
let playerScore = 0;
let compScore = 0;
let choices = document.querySelector('#choices');
let roundResults = document.querySelector('#roundResults');
let tournamentResults = document.querySelector('#tournamentResults');

// Finding out which button the user clicked and starting the game
let btnChoice = document.querySelector('#btnChoice');
btnChoice.addEventListener('click', event => {
    let playerChoice = event.target.id;
    switch(playerChoice) {
        case 'rock':
            game(0);
            break;
        case 'paper':
            game(1);
            break;
        case 'scissors':
            game(2);
            break;
    }
});
