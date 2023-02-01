let playerScore = 0;
let computerScore = 0;
let message = "";

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerHand = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  return computerHand
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a Tie, You both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Nice! You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Nice! You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Nice! You Win! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
    console.log(`Player selection is: ${playerSelection} `)
    console.log(`Computer selection is: ${computerSelection} `);
    console.log(playRound(playerSelection, computerSelection));
  }
  // determine winner of 5 round game  
  if (playerScore > computerScore) {
    message = "Congratulations! You won!!!";

  } else if (playerScore === computerScore) {
    message = "You tied with the Computer. Try Again!"
  } else {
    message = "Loser! Computer wins the game ;("
  }
  // Reports the winner 
  console.log("Game is over \nResult: " + message);
  alert(`Thank You for playing! \nThe score is: \nPlayer: ${playerScore} - Computer: ${computerScore} \n${message}`)
}

// Starts the game
game();