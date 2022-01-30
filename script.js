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
        if (userChoice == computerChoice) {
            return "Its a tie!";
        }
        else if (userChoice == "rock") {
            if (computerChoice == "scissors") {
                return "User wins with rock";
            }
            else {
                return "Computer wins with paper";
            }
        }
        else if (userChoice == "paper") {
            if (computerChoice == "rock") {
                return "User wins with paper";
            }
            else { return "Computer wins with scissors"; }
        }
        else if (userChoice == "scissors") {
            if (computerChoice == "rock") {
                return "Computer wins with rock";
            }
            else { return "User wins with scissors"; }
        }

    }

    round++;
    console.log(round)
    console.log(userScore)
    console.log(computerScore)
    console.log(tie)
    if (round !== 5) {
        var result = compare(userChoice, computerChoice);
        document.getElementById('result').innerHTML = result;
    } else {
        alert("Game Over=> User(" + userScore + ") vs Computer(" + computerScore + ")");
    }
}