game();

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* added async in order to use the sleep function to pause between each round */
async function game()
{
    for (let i = 1; i <= 5; i++) 
    {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Type in your choice! ex: \nRock\nPaper\nScissor");
        console.log(playRound(playerSelection, computerSelection));
        await sleep(1500); /* in milliseconds */
    }
}


