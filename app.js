const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

let userChoice;
let computerChoice;
let result;

//picked buttons to use
const possibleChoices = document.querySelectorAll('button');  // 3 choices

//click any/for each of the buttons with event listener something happens
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id     // e is event passed through function, event target ID and setting to user choice
    userChoiceDisplay.innerHTML = userChoice; // grab user choice in innerHTML set to userChoice
    
    
    setTimeout(generateComputerChoice, 250);
    setTimeout(getResult,550)

    
    // generateComputerChoice();

}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) // or 3 amount of buttons/options
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    
    
    computerChoiceDisplay.innerHTML = computerChoice;
};

let timerID = null;
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you loose';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you loose';
    }
    
    resultDisplay.innerHTML = result.toUpperCase(); //set resultDisplay of IHTML to value of result
    let newGameStartTimer = setInterval(newGame, 500)
}


function newGame(){
    document.location.reload();
}
