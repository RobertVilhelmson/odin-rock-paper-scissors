document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

const choices = ['rock', 'paper', 'scissors'];
const beats = {'rock': 'paper', 'paper': 'scissors', 'scissorcs': 'rock'};
const upper = {'rock': 'Rock', 'paper': 'Paper', 'scissors': 'Scissors'};

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

    console.log(compare(userChoice, computerChoice));

    function compare(userChoice, computerChoice) {
        return userChoice === computerChoice
        ? `Oh! It's a tie`
        : userChoice = beats[computerChoice]
        ? `You win! ${upper[userChoice]} beats ${computerChoice}`
        : `You lose! ${upper[userChoice]} beats ${computerChoice}`;
    }
}    