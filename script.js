let playerScore = 0;
let computerScore = 0;
let message = "";
let playerWins = 0;
let computerWins = 0;
let again = false;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissor"];
  const computerHand =
    choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  return computerHand;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerScore;
    computerScore;
    return `It's a Tie, You both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    return "Nice! You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Nice! You Win! Paper beats Rock";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    return "Nice! You Win! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt("Rock, Paper or Scissors")
      .toLowerCase()
      .replace(/\s+/g, "");

    if (playerSelection === "rocks" || playerSelection === "rock") {
      playerSelection = "rock";
      console.log(`Round Number: ${i}
      Player selection is: ${playerSelection}
      Computer selection is: ${computerSelection}`);
      //playRound(playerSelection, computerSelection);
      console.log(playRound(playerSelection, computerSelection));
    } else if (playerSelection === "papers" || playerSelection === "paper") {
      playerSelection = "paper";
      console.log(`Round Number: ${i}
      Player selection is: ${playerSelection}
      Computer selection is: ${computerSelection}`);
      //playRound(playerSelection, computerSelection);
      console.log(playRound(playerSelection, computerSelection));
    } else if (
      playerSelection === "scissors" ||
      playerSelection === "scissor"
    ) {
      playerSelection = "scissor";
      console.log(`Round Number: ${i}
      Player selection is: ${playerSelection}
      Computer selection is: ${computerSelection}`);
      //playRound(playerSelection, computerSelection);
      console.log(playRound(playerSelection, computerSelection));
    } else {
      console.log("Invalid Entry");
      i--;
    }
  }
  scoreCard();
  //Reports the winner
  // console.log("Game is over \nResult: " + message);
  // alert(
  //   `Thank You for playing! \nThe score is: \nPlayer: ${playerScore} - Computer: ${computerScore} \nTotal Wins by Player: ${playerWins} \nTotal Wins by Computer: ${computerWins} \n${message}`
  // );
  playerScore = 0;
  computerScore = 0;
}

//debugger;

const playRequest = function () {
  if (playAgain()) {
    return game();
  } else {
    alert(
      `Thank You for playing! \nThe Round score is: \nPlayer: ${playerScore} - Computer: ${computerScore} \nTotal Wins by Player: ${playerWins} \nTotal Wins by Computer: ${computerWins} \n${message}`
    );
  }
};

function scoreCard() {
  // determine winner of 5 round game
  if (playerScore > computerScore) {
    message = "Congratulations! You won!!!";
    console.log(message);
    playerWins++;
    playRequest();
  } else if (playerScore === computerScore) {
    message = `You tied with the Computer. Try Again!
    Player Wins Total: ${playerWins}
    Computer Wins Total: ${computerWins}`;
    console.log(message);
    playRequest();
  } else {
    message = "Loser! Computer wins the game ;(";
    console.log(message);
    computerWins++;
    playRequest();
  }
}

const playAgain = function () {
  return window.confirm("Do you want to play another round?");
};
// Starts the game
game();
