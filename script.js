function computerPlay() {
    var responsesArray = [
        'rock',
        'paper',
        'scissors'
    ];
    var responseRandom = Math.floor(Math.random()*responsesArray.length);
    var response = responsesArray[responseRandom];
    return response
}

let computerScore = 0;
let playerScore = 0;
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", playRound(playerSelection="rock"))
paperButton.addEventListener("click", playRound(playerSelection="paper"))
scissorsButton.addEventListener("click", playRound(playerSelection="scissors"))

/*Round function*/
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();

    console.log(computerSelection);
    /*take's player input and compares it to the computer's selection to determine the winner of the round and adds 1 to the winner's score*/
    if (playerSelection == computerSelection) {
        return 'Tie game! The score is ' + playerScore + ' to ' + computerScore + '.';
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock')
    ) {
        computerScore = ++computerScore;
        return 'You lose! ' + capitalize(computerSelection) + ' beats ' + playerSelection + '. The score is ' + playerScore + ' to ' + computerScore + '.';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        playerScore = ++playerScore
        return 'You won! ' + capitalize(playerSelection) + ' beats ' + computerSelection + '. The score is ' + playerScore + ' to ' + computerScore + '.';
    }

}
    /*game function*/
function game() {
    // for (let i = 0; i < 5; i++) {
    //     console.log(playRound())
    // }

    if (computerScore > playerScore) {
        return 'Sorry! you lost ' + computerScore + ' to ' + playerScore + '!';
    } else if (playerScore > computerScore) {
        return 'Congratulations! You won ' + playerScore + ' to ' + computerScore + '!';
    } else {
        return 'It\'s a tie!';
    }

}
/*function for capitalizing the first letter in a string*/
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(game());