document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

var userScore = 0
var computerScore = 0
var tie = 0
var round = 0

function user() {
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

    function compare(userChoice, computerChoice) {
        if (userChoice == computerChoice)
            return "The result is a tie!" && tie++;
        else if (userChoice == "rock")
            if (computerChoice == "scissors")
                return "User wins with rock" && userScore++;
            else
                return "Computer wins with paper" && computerScore++;
        else if (userChoice == "paper") {
            if (computerChoice == "rock")
                return "User wins with paper" && userScore++;
            else
                return "Computer wins with scissors" && computerScore++;
        }
        else if (userChoice == "scissors")
            if (computerChoice == "rock")
                return "Computer wins with rock" && computerScore++;
            else
                return "User wins with scissors" && userScore++;

    }
    round++;
    console.log(round)
    if (round == 5) {

        alert("Game Over=> User(" + userScore + ") vs Computer(" + computerScore + ")");
    }
}




