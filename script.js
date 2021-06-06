let moves = ["Rock", "Paper", "Scissors"];
let winList = ["RockScissors", "ScissorsPaper", "PaperRock"]
const computer_box = document.getElementById("computer");
const result_box = document.getElementById("result");
// const score_box = document.getElementById("scores");
const choices = document.querySelectorAll('button');
let pScore = 0;
let cScore = 0; 

function computerPlay() {
    let hand = Math.floor(Math.random() * 3);
    return moves[hand];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    }
    if (winList.includes(playerSelection + computerSelection)) {
        pScore++;
        if (pScore == 5) { 
            pScore = 0;
            cScore = 0;
            return "You won 5 times! Resetting..."; 
        }
        else {
            return "Player wins! " + playerSelection + " beats " + computerSelection;
        }
    }
    cScore++;
    if (cScore == 5) { 
        pScore = 0;
        cScore = 0;
        return "Computer won 5 times! Resetting..."
    }
    else {
        return "Computer wins! " + computerSelection + " beats " + playerSelection;
    }
}

function displayResults(result) { 
    /* // Alternative to replaceChild
    if (document.getElementById('score')) {
        document.getElementById('score').innerText = pScore.toString() + " : " + cScore.toString();
    }
    else { 
        const score = document.createElement('score');
        score.setAttribute("id", "score");
        score.textContent = pScore.toString() + " : " + cScore.toString();
        score_box.appendChild(score);
    }   */

    const res = document.createElement('p');
    res.textContent = result;
    result_box.replaceChild(res, result_box.childNodes[2]);

    const score = document.createElement('p');
    score.textContent = pScore.toString() + " : " + cScore.toString();
    result_box.replaceChild(score, result_box.childNodes[4]);
}

function displayComputerChoice(computerSelection) { 
    const res = document.createElement('p');
    res.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); 
    computer_box.replaceChild(res, computer_box.childNodes[2]);
}

choices.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        displayComputerChoice(computerSelection); 
        displayResults(result); 
    })
})

