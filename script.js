const choices = ['rock', 'paper', 'scissors'];
const beats = {'rock': 'paper', 'paper': 'scissors', 'scissorcs': 'rock'};
const upper = {'rock': 'Rock', 'paper': 'Paper', 'scissors': 'Scissors'};

function computerPlay () {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(human, computer) {
    return human === computer
        ? `Oh! It's a tie`
        : human = beats[computer]
        ? `You win! ${upper[human]} beats ${computer}`
        : `You lose! ${upper[computer]} beats ${human}`;
}
    
const playerSelection = choices[0];
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

