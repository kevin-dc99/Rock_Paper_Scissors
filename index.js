const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie";
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    else {
        return `You Lose! ${playerSelection} does not beat ${computerSelection}`;
    }
    
}

let round = 0;
function playGame() {
        while (round < 5) {
            const playerSelection = prompt("Please type of of the following to play: Rock, Paper, Scissors").toLocaleLowerCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));

            if (playRound(playerSelection, computerSelection) === "It's a Tie") {
                playerScore++;
                computerScore++;
                console.log(`Player Score is ${playerScore}`);
                console.log(`Computer Score is ${computerScore}`);
            }
            else if (playRound(playerSelection, computerSelection).includes(`Win`)) {
                playerScore++;
                console.log(`Player Score is ${playerScore}`);
                console.log(`Computer Score is ${computerScore}`);
            }
            else if (playRound(playerSelection, computerSelection).includes(`Lose`)) {
                computerScore++;
                console.log(`Player Score is ${playerScore}`);
                console.log(`Computer Score is ${computerScore}`);
            }
            round++;
    }

    if (playerScore === computerScore) {
        console.log(`The current score is ${playerScore} - ${computerScore}. Seem's like the game ended in a draw. Refresh the page to play a new game`);
    }
    else if (playerScore > computerScore) {
        console.log(`The current score is ${playerScore} - ${computerScore}. You won the game!!. Refresh the page to play a new game`);
    }
    else if (playerScore < computerScore) {
        console.log(`The current score is ${playerScore} - ${computerScore}. You lost the game!!. Refresh the page to play a new game`);
    }
}

playGame()