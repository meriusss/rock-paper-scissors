let playButton = document.getElementById("play");
let playArea = document.querySelector(".play-area");
let playerChoice;

function getComputerChoice() {

    //Declare computer choices
    let choices = ["rock", "paper", "scissors"];

    //Pick random number
    let random = Math.floor(Math.random() * choices.length);

    //return choice
    return choices[random];
}

function decideRoundWinner(playerChoice, computerChoice){
    let roundWinner;

    //If choices are equal
    if (playerChoice == computerChoice){
        roundWinner = "draw";
        return roundWinner;
    }
    //If player wins
    else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        roundWinner = "player";
        return roundWinner;
    }
    //If computer wins
    else if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")){
        roundWinner = "computer";
        return roundWinner;
    };
};

function whatToDoAfterSomeoneWinsRound(winner, playerWins, computerWins, text){
    //If player wins
    if (winner == "player"){
        playerWins.textContent++; //Increment player wins
        text.textContent = "Player wins!"; //Display winner
    }
    else if (winner == "computer"){
        computerWins.textContent++;//Increment computer wins
        text.textContent = "Computer wins!"; //Display winner
    }
    else {
        text.textContent = "It's a draw!"; //Display draw
    }
};

//Change computer choice image
function updateComputerChoiceImage(computerChoice, image){
    if (computerChoice == "rock"){
        image.src = "svgs/rock.svg";
    }
    else if (computerChoice == "paper"){
        image.src = "svgs/paper.svg";
    }
    else if (computerChoice == "scissors"){
        image.src = "svgs/scissors.svg";
    }
}

playButton.addEventListener('click', (e)=>{
    
    //Remove play button and container
    playButton.parentElement.remove();

    //Create selection containers and other elements
    let playerSelectionContainer = document.createElement("div");
    let computerSelectionContainer = document.createElement("div");
    let rockButton = document.createElement("button");
    let paperButton = document.createElement("button");
    let scissorsButton = document.createElement("button");
    let computerSelectionText = document.createElement("p");
    let textContainer = document.createElement("div");
    let playerTextContainer = document.createElement("div");
    let computerTextContainer = document.createElement("div");
    let playerText = document.createElement("p");
    let computerText = document.createElement("p");
    let playerWins = document.createElement("p");
    let computerWins = document.createElement("p");


    //Create the img elements for svgs
    let rockSvg = document.createElement("img");
    let paperSvg = document.createElement("img");
    let scissorsSvg = document.createElement("img");
    let computerSelectionImage = document.createElement("img");
    
    //Create select text
    let text = document.createElement("p");

    //Give the newly created elements attributes
    playerSelectionContainer.classList.add("player-selection-container");
    computerSelectionContainer.classList.add("computer-selection-container");
    rockButton.classList.add("button");
    paperButton.classList.add("button");
    scissorsButton.classList.add("button");
    textContainer.classList.add("text-container");
    playerTextContainer.classList.add("text-container-column");
    computerTextContainer.classList.add("text-container-column");
    text.classList.add("text-container-column")
    rockSvg.src = "svgs/rock.svg";
    rockSvg.alt = "rock";
    paperSvg.src = "svgs/paper.svg";
    paperSvg.alt = "paper";
    scissorsSvg.src = "svgs/scissors.svg";
    text.textContent = "Please make your selection!";
    computerSelectionText.textContent = "Computer chose:";
    playerText.textContent = "Player wins";
    computerText.textContent = "Computer wins";
    playerWins.textContent = "0";
    computerWins.textContent = "0";

    //Add event listener for each button
    rockButton.addEventListener('click', (e)=>{
        let playerChoice = "rock";
        let computerChoice = getComputerChoice();
        text.textContent = "";
        let winner = decideRoundWinner(playerChoice, computerChoice);
        updateComputerChoiceImage(computerChoice,computerSelectionImage);
        whatToDoAfterSomeoneWinsRound(winner,playerWins,computerWins, text);
    });

    paperButton.addEventListener('click', (e)=>{
        let playerChoice = "paper";
        let computerChoice = getComputerChoice();
        text.textContent = "";
        let winner = decideRoundWinner(playerChoice, computerChoice);
        updateComputerChoiceImage(computerChoice,computerSelectionImage);
        whatToDoAfterSomeoneWinsRound(winner,playerWins,computerWins, text);
    });

    scissorsButton.addEventListener('click', (e)=>{
        let playerChoice = "scissors";
        let computerChoice = getComputerChoice();
        text.textContent = "";
        let winner = decideRoundWinner(playerChoice, computerChoice);
        updateComputerChoiceImage(computerChoice,computerSelectionImage);
        whatToDoAfterSomeoneWinsRound(winner,playerWins,computerWins, text);
    });






    //Append the newly created elements
    computerSelectionContainer.append(computerSelectionText,computerSelectionImage);
    playerTextContainer.append(playerText, playerWins);
    computerTextContainer.append(computerText,computerWins);
    textContainer.append(playerTextContainer,computerTextContainer);
    rockButton.append(rockSvg);
    paperButton.append(paperSvg);
    scissorsButton.append(scissorsSvg);
    playerSelectionContainer.append(rockButton,paperButton,scissorsButton);
    playArea.append(computerSelectionContainer,textContainer,text,playerSelectionContainer);





})