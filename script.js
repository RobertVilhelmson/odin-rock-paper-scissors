const choices = ['rock', 'paper', 'scissors'];
const beats = { 'rock': 'paper', 'paper': 'scissors', 'scissorcs': 'rock' };
const upper = { 'rock': 'Rock', 'paper': 'Paper', 'scissors': 'Scissors' };

// Computers choice
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// The game being played
function playRound(human, computer) {
    return human === computer
        ? `Oh! It's a tie`
        : human = beats[computer]
            ? `You win! ${upper[human]} beats ${computer}`
            : `You lose! ${upper[computer]} beats ${human}`;
}

let humanScore = parseInt(0);
let computerScore = parseInt(0);

function rock_press() {
    document.getElementById("test").innerHTML = "Hello World!";
};

// var i = 0;
// const play = () => {
//    let human = prompt("Rock, Paper or Scissors? Choose your weapon!").toLowerCase();
//    let computer = computerPlay();
//    let roundResult = playRound(human, computer);
//
//    if (roundResult.includes('win')) {
//        humanScore++;
//    } else if (roundResult.includes('lose')) {
//        computerScore++;
//    }

//    console.log(playRound(human, computer))
//    console.log("your score = " + humanScore);
//    console.log("Computer's score = " + computerScore);
//    i++;
    // if (i !== 5) {
    //    play();
    // } else {
    //     alert("Game Over=> User("+humanScore+") vs Computer("+computerScore+")");
    // }
// }


// play();
