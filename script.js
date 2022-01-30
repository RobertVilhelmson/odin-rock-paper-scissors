document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

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
            if(userChoice == computerChoice) 
            return "The result is a tie!";
        else if(userChoice == "rock") 
            if(computerChoice == "scissors") 
                return "rock wins";
             else 
                return "paper wins";
        else if(userChoice == "paper"){ 
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