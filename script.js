function computerPlay() {
    var responsesArray = [
        'rock',
        'paper',
        'scissors'
    ];
    var responseRandom = Math.floor(Math.random()*responsesArray.length);
    var response = responsesArray[responseRandom];
    return response;
}

/*Update score function*/
function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

/*function for capitalizing the first letter in a string*/
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let computerScore = 0;
let playerScore = 0;
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors") 
const scoreDiv = document.querySelector("#score")
const resultsDiv = document.querySelector("#results")

rockButton.addEventListener("click", playRound.bind("rock"));
paperButton.addEventListener("click", playRound.bind("paper"));
scissorsButton.addEventListener("click", playRound.bind("scissors"));

/*Round function*/
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = this

    console.log(computerSelection);
    /*take's player input and compares it to the computer's selection to determine the winner of the round and adds 1 to the winner's score*/
    if (playerSelection == computerSelection) {
        resultsDiv.textContent =  'Tie game!';
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock')
    ) {
        computerScore = ++computerScore;
        resultsDiv.textContent = 'You lose! ' + capitalize(computerSelection) + ' beats ' + playerSelection + '.';
        updateScore()
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        playerScore = ++playerScore
        resultsDiv.textContent = 'You won! ' + capitalize(playerSelection) + ' beats ' + computerSelection + '.';
        updateScore()
    }

    if (computerScore == 5) {
        resultsDiv.textContent = 'Sorry! you lost ' + computerScore + ' to ' + playerScore + '!';
    } else if (playerScore == 5) {
        resultsDiv.textContent = 'Congratulations! You won ' + playerScore + ' to ' + computerScore + '!';
    }

}




