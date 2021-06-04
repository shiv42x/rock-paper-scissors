let moves = ["rock", "paper", "scissors"];
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

function displayResults(result) { 
    const result_box = document.getElementById("result-box");
    const res = document.createElement('p');
    res.textContent = result; 
    result_box.replaceChild(res, result_box.childNodes[2]);
}

function displayComputerChoice(computerSelection) { 
    const computer_box = document.getElementById("computer-box");
    const res = document.createElement('p');
    res.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); 
    computer_box.replaceChild(res, computer_box.childNodes[4]);
}

const choices = document.querySelectorAll('button');
choices.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        displayComputerChoice(computerSelection); 
        displayResults(result); 
    })
})

