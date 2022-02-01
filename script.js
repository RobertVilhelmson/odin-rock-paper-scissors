document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;


var userScore = 0
var computerScore = 0
var tieScore = 0
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

    round++;
    console.log(round)
    console.log(userScore)
    console.log(computerScore)
    console.log(tieScore)
    if (round !== 5) {
        var result = compare(userChoice, computerChoice);
        document.getElementById('result').innerHTML = result;
    } else {
        alert("Game Over=> User(" + userScore + ") vs Computer(" + computerScore + ") - Ties(" + tieScore + ")");
    }
}