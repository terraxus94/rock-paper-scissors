const options = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerSelectionNormalised;

function computerPlay() {
  return (options[Math.floor(Math.random() * Math.floor(3))] 
  )
}

function playOneRound(playerSelection, computerSelection) {
  playerSelectionNormalised = playerSelection.toLowerCase();
  if (playerSelectionNormalised == computerSelection) return "It's a tie!";
  if ((playerSelectionNormalised == 'rock') && (computerSelection == 'paper')) return `You lose! ${computerSelection} beats ${playerSelectionNormalised}`;
  if ((playerSelectionNormalised == 'paper') && (computerSelection == 'scissors')) return `You lose! ${computerSelection} beats ${playerSelectionNormalised}`;
  if ((playerSelectionNormalised == 'scissors') && (computerSelection == 'rock')) return `You lose! ${computerSelection} beats ${playerSelectionNormalised}`;
  if ((playerSelectionNormalised == 'rock') && (computerSelection == 'scissors')) return `You win! ${playerSelectionNormalised} beats ${computerSelection}`;
  if ((playerSelectionNormalised == 'paper') && (computerSelection == 'rock')) return `You win! ${playerSelectionNormalised} beats ${computerSelection}`;
  if ((playerSelectionNormalised == 'scissors') && (computerSelection == 'paper')) return `You win! ${playerSelectionNormalised} beats ${computerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Pick a sign');
    let result = playOneRound(playerSelection, computerPlay());
    if (result.includes('win')) {playerScore += 1};
  }
  console.log(`You have won ${playerScore} out of 5 times`);
}

game();