document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
document.getElementById('reset').onclick = ResetGlobalVariables;

var userScore = 0
var computerScore = 0
var tieScore = 0
var round = 0

function playRound() {
    var userChoice = this.id;
    console.log("User: " + userChoice)

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };

    console.log("Computer: " + computerChoice);
    round++;

    var roundResult = compare(userChoice, computerChoice);
    document.getElementById('result').innerHTML = roundResult;

    if (round == 5) {
        var gameResult = determinWinner(userScore, computerScore);
        document.getElementById('result').innerHTML = gameResult;
    }
}

function compare(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        tieScore++
        return "Its a tie!";
    }
    else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            userScore++
            return "User wins with rock";
        }
        else {
            computerScore++
            return "Computer wins with paper";
        }
    }
    else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            userScore++
            return "User wins with paper";
        }
        else {
            computerScore++
            return "Computer wins with scissors";
        }
    }
    else if (userChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++
            return "Computer wins with rock";
        }
        else {
            userScore++
            return "User wins with scissors";
        }
    }

}

function determinWinner(userScore, computerScore) {
    if (userScore == computerScore) {
        return "It's a tie! Nobody wins!";
    }
    else if (userScore > computerScore) {
        return `You win agains the computer! You: ${userScore} - Computer: ${computerScore} - Tie: ${tieScore}`;
    } else {
        return `You lose against the computer! You: ${userScore} - Computer: ${computerScore} - Tie: ${tieScore}`;
    }
}

var roundResult, userChoice, computerScore, tieScore;
ResetGlobalVariables();

function ResetGlobalVariables() {

    userScore = 0
    computerScore = 0
    tieScore = 0
    round = 0
    document.getElementById('result').innerHTML = "Choose your weapon!"
}