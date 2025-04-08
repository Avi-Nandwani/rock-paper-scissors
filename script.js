// document.addEventListener("DOMContentLoaded", function () {
    let humanScore = 0,
        computerScore = 0;
    let roundCount = 0;  

    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorButton = document.querySelector(".scissor");
    const outcomeDiv = document.querySelector(".outcome");

    function getComputerChoice() {
        const arrOfChoices = ["rock", "paper", "scissor"];
        const randoNum = Math.floor(Math.random() * arrOfChoices.length);
        return arrOfChoices[randoNum];
    }

    function playRound(HumanMove, ComputerMove) {
        console.log('1', HumanMove, "2", ComputerMove);
        const p = document.createElement('p');

        if (HumanMove === ComputerMove) {
            p.innerText = "It's a tie!";
        }
        else if (HumanMove === "rock" && ComputerMove === "paper") {
            computerScore++;
            p.innerText = "Computer wins! Paper can grab rock.";
        } 
        else if (HumanMove === "rock" && ComputerMove === "scissor") {
            humanScore++;
            p.innerText = "You win! Rock beats scissor.";
        }
        else if (HumanMove === "paper" && ComputerMove === "rock") {
            humanScore++;
            p.innerText = "You win! Paper can grab rock.";
        }
        else if (HumanMove === "paper" && ComputerMove === "scissor") {
            computerScore++;
            p.innerText = "Computer wins! Scissor cuts paper.";   
        }
        else if (HumanMove === "scissor" && ComputerMove === "paper") {
            humanScore++;
            p.innerText = "You win! Scissor cuts paper.";
        }
        else if (HumanMove === "scissor" && ComputerMove === "rock") {
            computerScore++;
            p.innerText = "Computer wins! Rock beats scissor.";
        }

        outcomeDiv.appendChild(p);

        // Displays the current score
        const scoreText = document.createElement('p');
        scoreText.innerText = `Human: ${humanScore} - Computer: ${computerScore}`;
        outcomeDiv.appendChild(scoreText);

        roundCount++;

        if (roundCount >= 5) {
            displayFinalWinner();
        }
    }

    function displayFinalWinner() {
        const finalWinnerMessage = document.createElement('p');
        if (humanScore > computerScore) {
            finalWinnerMessage.innerText = "You are the winner!";
        } else if (humanScore === computerScore) {
            finalWinnerMessage.innerText = "It's a tie!";
        } else {
            finalWinnerMessage.innerText = "Computer is the winner!";
        }
        outcomeDiv.appendChild(finalWinnerMessage);

        // Disables the buttons after the game ends
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }

    // Event listeners for button clicks
    rockButton.addEventListener("click", () => {
        if (roundCount < 5) {
            const ComputerMove = getComputerChoice();
            const HumanMove = 'rock';
            playRound(HumanMove, ComputerMove);
        }
    });

    paperButton.addEventListener("click", () => {
        if (roundCount < 5) {
            const ComputerMove = getComputerChoice();
            const HumanMove = "paper";
            playRound(HumanMove, ComputerMove);
        }
    });

    scissorButton.addEventListener("click", () => {
        if (roundCount < 5) {
            const ComputerMove = getComputerChoice();
            const HumanMove = "scissor";
            playRound(HumanMove, ComputerMove);
        }
    });
// });
