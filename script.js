let moves = ["rock", "paper", "scissors"]

function computerPlay() {
    let hand = Math.floor(Math.random() * 3);
    return moves[hand];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    }
    if (playerSelection == "rock") { 
        if (computerSelection == "scissors") { 
            return "You Win! Rock beats Scissors"
        }
        if (computerSelection == "paper") { 
            return "You Lose! Paper beats Rock"
        }
    }
    if (playerSelection == "paper") { 
        if (computerSelection == "rock") { 
            return "You Win! Paper beats Rock"
        }
        if (computerSelection == "scissors") { 
            return "You Lose! Scissors beats Paper"
        }
    }
    if (playerSelection == "scissors") { 
        if (computerSelection == "paper") { 
            return "You Win! Scissors beats Paper"
        }
        if (computerSelection == "rock") { 
            return "You Lose! Rock beats Scissors"
        }
    }
}


for (let i = 0; i <= 5; i++) { 
    playerSelection = window.prompt("Choose:", "");
    computerSelection = computerPlay();
    console.log("You chose " + playerSelection + ", Computer chose " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}