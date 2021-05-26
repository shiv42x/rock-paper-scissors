function computerPlay() {
    let moves = ["Rock", "Paper", "Scissors"];
    let hand = Math.floor(Math.random() * 3);
    console.log(moves[hand]);
}

for (var i = 0; i < 3; i++) { 
    computerPlay();
}