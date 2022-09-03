let computerWins = 0;
let playerWins = 0;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*choices.length);
    //console.log(computerSelection);
    return computerSelection;
}

function getPlayerChoice(){
    let playerSelection = prompt("Please enter rock, paper or scissors!").toLowerCase();
    while (choices.indexOf(playerSelection) <= -1){
        playerSelection = prompt("Your choice is not on the list. Please enter rock, paper or scissors!").toLowerCase();
    }
    //console.log(playerSelection);
    return playerSelection;
}

function playRound(getComputerChoice, getPlayerChoice){
    if (getComputerChoice === 0 && getPlayerChoice === "rock"){
        console.log("Draw!");}
    else if (getComputerChoice === 1 && getPlayerChoice === "rock"){
        console.log("Computer wins round! :(");
        computerWins++;}
    else if (getComputerChoice === 2 && getPlayerChoice === "rock"){
        console.log("Player wins Round! :)");
        playerWins++;}
    else if (getComputerChoice === 0 && getPlayerChoice === "paper"){
        console.log("Player wins round! :)");
        playerWins++;}
    else if (getComputerChoice === 1 && getPlayerChoice === "paper"){
        console.log("Draw!");}
    else if (getComputerChoice === 2 && getPlayerChoice === "paper"){
        console.log("Computer wins round! :(");
        computerWins++;}
    else if (getComputerChoice === 0 && getPlayerChoice === "scissors"){
        console.log("Computer wins round! :(");
        computerWins++;}
    else if (getComputerChoice === 1 && getPlayerChoice === "scissors"){
        console.log("Player wins round! :)");
        playerWins++;}
    else if (getComputerChoice === 2 && getPlayerChoice === "scissors"){
        console.log("Draw!");}
}

function game(playRound){
    while (playerWins < 3 && computerWins < 3 ){
        playRound(getComputerChoice(),getPlayerChoice());
    }
    if (computerWins > playerWins){
        console.log("Computer wins with a score of ", computerWins, " - ", playerWins);
    }
    else if (computerWins < playerWins){
        console.log("Player wins with a score of ", playerWins, " - ", computerWins);
    }
    else if (computerWins = playerWins){
        console.log("It's a draw!");
    }
}

game(playRound);