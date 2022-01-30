document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

const choices = ['rock', 'paper', 'scissors'];
// const beats = {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};
// const upper = {'rock': 'Rock', 'paper': 'Paper', 'scissors': 'Scissors'};
 

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
            if(userChoice == computerChoice)  //condition 1
            return "The result is a tie!";
        else if(userChoice == "rock") //condition 2
            if(computerChoice == "scissors") 
                return "rock wins";
             else 
                return "paper wins";
        else if(userChoice == "paper"){ //condition 3
            if(computerChoice == "rock") 
                return "paper wins";
             else 
                return "scissors wins";
        }
        else if(userChoice == "scissors")
            if(computerChoice == "rock")
               return "rock wins";
            else 
               return "scissors wins";
    }
}    