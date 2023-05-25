let computerWins = 0;
let playerWins = 0;
let choices = ["rock", "paper", "scissors"];
const playerWinsDisplay = document.getElementById("pScore")
const computerWinsDisplay = document.getElementById("cScore")
const playerSelectionDisplay = document.getElementById("userChoice");
const computerSelectionDisplay = document.getElementById("computerChoice")
const resultDisplay = document.getElementById("result")
const btns = document.getElementsByClassName('btn');
let playerSelection;
let computerSelection;
playerWinsDisplay.innerHTML = playerWins;
computerWinsDisplay.innerHTML = computerWins;

for (const btn of btns)
btn.addEventListener('click', () => {
    console.log(btn.id);
    playerSelection = String(btn.id);
    playerSelectionDisplay.innerHTML = playerSelection;
    getComputerChoice();
    playRound();
    });



function getComputerChoice(){
    computerSelection = Math.floor(Math.random()*choices.length);
    if (computerSelection === 0){
        computerSelection = "rock";
    }
    else if (computerSelection === 1){
        computerSelection = "paper";
    }
    else if (computerSelection === 2){
        computerSelection = "scissors";
    }
    computerSelectionDisplay.innerHTML = computerSelection;
    console.log(computerSelection);

}

function playRound(){
    if ((computerSelection === playerSelection)){
        console.log("Draw!");}
    else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "rock" && playerSelection === "scissors")){
        resultDisplay.innerHTML = "Computer wins round!";
        console.log("Computer wins round! :(");
        computerWins++;
        playerWinsDisplay.innerHTML = playerWins;
        computerWinsDisplay.innerHTML = computerWins;}
    else if ((computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "scissors")){
        resultDisplay.innerHTML = "Player wins round!";
        console.log("Player wins Round! :)");
        playerWins++;
        playerWinsDisplay.innerHTML = playerWins;
        computerWinsDisplay.innerHTML = computerWins;}

    if (playerWins === 3){
        resultDisplay.innerHTML = "Player won game!";
        playerWins = 0;
        computerWins = 0;
        playerWinsDisplay.innerHTML = playerWins;
        computerWinsDisplay.innerHTML = computerWins;
    }
    else if (computerWins === 3){
        resultDisplay.innerHTML = "Computer won game!";
        computerWins = 0;
        playerWins = 0;
        playerWinsDisplay.innerHTML = playerWins;
        computerWinsDisplay.innerHTML = computerWins;
    }
}


