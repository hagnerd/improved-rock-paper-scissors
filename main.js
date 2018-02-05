const rock = document.querySelector('.rock');
rock.addEventListener('click', playRound);
const paper = document.querySelector('.paper');
paper.addEventListener('click', playRound);
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', playRound);

// ADD selector for game results, round, player score, computer score etc.
const playerWins = document.querySelector('.playerWins');
const computerWins = document.querySelector('.computerWins');
const roundTies = document.querySelector('.roundTies');

const roundWinner = document.querySelector('.round');
const gameWinner = document.querySelector('.gameWinner');

let results = {
  player: 0,
  computer: 0,
  ties: 0 
}

let round = [];

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(){
  let computerChoice = computerPlay();
  let playerChoice = this.className;

  if(
    playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'rock'
  ){
    results.player += 1
    round.push(`You win this round! ${playerChoice} beats ${computerChoice}`)
  } else if ( playerChoice === computerChoice) {
    results.ties += 1
    round.push(`You tie this round! You both chose ${playerChoice}`)
  } else {
    results.computer += 1
    round.push(`You lose this round! ${computerChoice} beats ${playerChoice}`)
  }

  displayContent(results, round)
}

function game(){
  while(playerWins < 5 || computerWins < 5) {

  }
}

function displayContent(results, round){
  let winner;
  if(results.player >=5 || results.computer >=5) {
    if(results.player >=5) {
      winner = 'You Won!'
    } else if (results.computer >= 5) {
      winner = 'Aw Shucks The Computer Won!'
    }
    gameWinner.textContent = winner;
  }

  playerWins.textContent = results.player
  computerWins.textContent = results.computer
  roundTies.textContent = results.ties
  roundWinner.textContent = round[round.length-1]
}

// 1. Add event listener for rock, paper, and scissor buttons.
// 2. When button is clicked, play a round of the game.
// 3. Take the button input as the players choice, and randomize the computers
// choice
// 4. Display the number of rounds played, and number of player wins, ties, and
// computer wins. 
// 5. Once either the player or the computer has one 5 times, declare a
// winner.
