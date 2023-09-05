var userScore = 0; //var instead of const for global variable
var compScore = 0;

function getComputerChoice() { //get random computer choice for rock, paper or scissor
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissor"; break;
    }
}

/* starts the game round once the function receives the player and computer choice  */
function playRound(playerSelection, computerSelection) {
    switch (computerSelection) { //for every possible outcome return a unique string 
        case "rock":
            switch (playerSelection) 
            {
                case "rock": return "Tie!"; break;
                case "paper": userScore++; return "You Win! Paper beats Rock"; break;
                case "scissor": compScore++; return "You Lose! Rock beats Scissor"; break;
                default: return "Wrong Input!"; break;
            }
            break;
        case "paper":
            switch (playerSelection) 
            {
                case "rock": compScore++; return "You Lose! Paper beats Rock"; break;
                case "paper": return "Tie!"; break;
                case "scissor": userScore++; return "You Win! Scissor beats Paper"; break;
                default: return "Wrong Input!"; break;
            }
            break;
        case "scissor":
            switch (playerSelection) 
            {
                case "rock": userScore++; return "You Win! Rock beats Scissor"; break;
                case "paper": compScore++; return "You Lose! Scissor beats Paper"; break;
                case "scissor": return "Tie!"; break;
                default: return "Wrong Input!"; break;
            }
            break;
    }
}


//caching dom
const result = document.querySelector(".results > h1");
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");

function game(playerSelection) { //receives player selection to start game
    const computerSelection = getComputerChoice();
    changeImage(playerSelection, computerSelection);
    result.innerHTML = playRound(playerSelection, computerSelection); /* change the text to display the win/lose result */
    userScore_span.innerHTML = userScore; /* change score text to current score */
    compScore_span.innerHTML = compScore;
}

function main() { //On click of the rps button start game with player selected option
    rock.addEventListener('click', function() {
        game('rock');
    })

    paper.addEventListener('click', function() {
        game('paper');
    })

    scissor.addEventListener('click', function() {
        game('scissor');
    })
}

/* function to change images based off of the computer and user selection */
function changeImage(playerSelection, computerSelection) 
{
    //caching the dom for image information by using the image ID
    var compImage = document.getElementById('compImage');
    var userImage = document.getElementById('userImage');

    switch (computerSelection) {
        case "rock":
            compImage.src = "./images/theRock.png"; //changing image src for computer selection
            switch (playerSelection) 
            {   //changing image src for the playerselection
                case "rock": userImage.src = "./images/theRock.png"; break;
                case "paper": userImage.src = "./images/paper.png"; break;
                case "scissor": userImage.src = "./images/scissor.png"; break;
            }
            break;
        case "paper":
            compImage.src = "./images/paper.png";
            switch (playerSelection) 
            {
                case "rock": userImage.src = "./images/theRock.png"; break;
                case "paper": userImage.src = "./images/paper.png"; break;
                case "scissor": userImage.src = "./images/scissor.png"; break;
            }
            break;
        case "scissor":
            compImage.src = "./images/scissor.png";
            switch (playerSelection) 
            {
                case "rock": userImage.src = "./images/theRock.png"; break;
                case "paper": userImage.src = "./images/paper.png"; break;
                case "scissor": userImage.src = "./images/scissor.png"; break;
            }
            break;
    }
}

main(); /* calling the main function to begin running program */