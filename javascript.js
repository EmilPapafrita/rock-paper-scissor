
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissor"; break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();
    switch (computerSelection) {
        case "rock":
            switch (playerSelection) 
            {
                case "rock": return "Tie!"; break;
                case "paper": return "You Win! Paper beats Rock"; break;
                case "scissor": return "You Lose! Rock beats Scissor"; break;
                default: return "Wrong Input!"; break;
            }
            break;
        case "paper":
            switch (playerSelection) 
            {
                case "rock": return "You Lose! Paper beats Rock"; break;
                case "paper": return "Tie!"; break;
                case "scissor": return "You Win! Scissor beats Paper"; break;
                default: return "Wrong Input!"; break;
            }
            break;
        case "scissor":
            switch (playerSelection) 
            {
                case "rock": return "You Win! Rock beats Scissor"; break;
                case "paper": return "You Lose! Scissor beats Paper"; break;
                case "scissor": return "Tie!"; break;
                default: return "Wrong Input!"; break;
            }
            break;
    }
}

const userScore = 0;
const compScore = 0;
//caching dom
const result = document.querySelector(".results > h1");
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    changeImage(playerSelection, computerSelection);
    result.innerHTML = playRound(playerSelection, computerSelection);
}

function main() { //On click of the rps button start game with selected option
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

main();