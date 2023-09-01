
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

//caching dom
const result = document.querySelector(".results > h1");
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    result.innerHTML = playRound(playerSelection, computerSelection);
}

function main() {
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

main();