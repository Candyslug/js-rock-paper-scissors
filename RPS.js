

function computerPlay() {
    let turn = Math.floor(Math.random() * 3);
    if (turn == 0) {
        return "rock";
    }
    else if (turn == 1) {
        return "paper";
    }
    else if (turn == 2) {
        return "scissors";
    }
    else {
        console.log("error computer play turn: " + turn)
        return 0;
    }
}

function playRound(playerSelection, computerSelection) {
    // return the winning message
    switch (playerSelection) {
        case "rock": 
            if (computerSelection == "rock") {
                return ["No winner! draw", "draw"];
            }
            else if (computerSelection == "paper") {
                return ["computer wins! paper > rock", "computer"];
            }
            else if (computerSelection == "scissors") {
                return ["player wins! scissors > rock", "player"];
            }
            break;
        case "paper": 
            if (computerSelection == "rock") {
                return ["player wins! paper > rock", "player"];
            }
            else if (computerSelection == "paper") {
                return ["No winner! draw", "draw"];
            }
            else if (computerSelection == "scissors") {
                return ["computer wins! scissors > paper", "computer"];
            }
            break;
        case "scissors": 
            if (computerSelection == "rock") {
                return ["computer wins! rock > scissors", "computer"];
            }
            else if (computerSelection == "paper") {
                return ["player wins! scissors > paper", "player"];
            }
            else if (computerSelection == "scissors") {
                return ["no winner! draw!", "draw"];
            }
            break;
    }
}

function playerPlay() {
    let a = prompt("your move:");
    a = a.toLowerCase();
    return a;
}

function playToFive() {
    let playerWins = 0;
    let computerWins = 0;
    while ((playerWins < 5) || (computerWins < 5)) {

        if (playerWins >= 5) {
            console.log("Player wins!!!");
            break;
        }
        if (computerWins >= 5) {
            console.log("Computer wins! unlucky");
            break;
        }

        let a = playerPlay();
        let b = computerPlay();
        const c = playRound(a, b);
        console.log(c[0]);
        
        if (c[1] == "player") {
            playerWins += 1;
        }
        else if (c[1] == "computer") {
            computerWins += 1;
        }
        console.log(`score: ${playerWins} - ${computerWins}`);
    }
}

playToFive();