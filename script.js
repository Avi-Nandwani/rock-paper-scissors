let humanScore = 0,
    computerScore = 0;

// const HumanMove = getHumanChoice();
// const ComputerMove = getComputerChoice();

function getHumanChoice() {
    let input = prompt('Enter a choice for Rock-Paper-Scissor Game');
    input = input.toLowerCase();
    return input;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}
console.log(getComputerChoice());


function checkWin(HumanMove, ComputerMove) {
    if (HumanMove === ComputerMove) {
        return "it's a tie!";
    }

    else if (HumanMove === "rock") {
        if (ComputerMove === "paper") {
            computerScore++;
            return "computer wins!, paper can grab rock";
        }
        else if (ComputerMove === "scissor") {
            humanScore++;
            return "you win!, rock beats scissor";
        }
    }

    else if (HumanMove === "paper") {
        if (ComputerMove === "rock") {
            humanScore++;
            return "you win!, paper can grab rock";
        }
        else if (ComputerMove === "scissor") {
            computerScore++;
            return "computer wins!, scissor cuts paper";   
        }
    }

    else {
        if (ComputerMove === "paper") {
            humanScore++;
            return "you win!, scissor cuts paper";
        }
        else if (ComputerMove === "rock") {
            computerScore++;
            return "computer wins!, rock beats scissor";
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {

        const HumanMove = getHumanChoice();
        const ComputerMove = getComputerChoice();

        console.log("User move is ",HumanMove);
        console.log("Computer move is ",ComputerMove);

        console.log(checkWin(HumanMove,ComputerMove));

        console.log("User score is ",humanScore);
        console.log("Computer score is ",computerScore);
    }
}

function printWinner(humanScore,computerScore){
    if(humanScore>computerScore){
        console.log("User is the final winner");
    }
    else if(humanScore===computerScore){
        console.log("It's a tie!");
    }
    else{
        console.log("Computer is the final winner");
    }
}

playGame();
printWinner(humanScore,computerScore);



