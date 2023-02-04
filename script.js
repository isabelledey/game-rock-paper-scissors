let playerScore = 0;
let computerScore = 0;
let message = "";
let again = false;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerHand =
    choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  return computerHand;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a Tie, You both picked ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `Nice! You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    try {
      const computerSelection = computerPlay();
      let playerSelection = prompt("Rock, Paper or Scissors")
        .toLowerCase()
        .replace(/\s/g, "")
        .trim();
      if (playerSelection === "rocks") {
        playerSelection = "rock";
      } else if (playerSelection === "papers") {
        playerSelection = "paper";
      }

      if (
        playerSelection !== "rock" &&
        playerSelection !== "scissors" &&
        playerSelection !== "paper"
      ) {
        throw new Error(
          "Invalid input. Please enter 'rock', 'paper', or 'scissors'."
        );
      }

      console.log(`Player selection is: ${playerSelection} `);
      console.log(`Computer selection is: ${computerSelection} `);
      console.log(playRound(playerSelection, computerSelection));
    } catch (error) {
      console.error(error.message);
      i--;
    }
  }
}

game();

// determine winner of 5 round game
const finalCompare = function () {
  if (playerScore > computerScore) {
    message = "Congratulations! You won!!!";
  } else if (playerScore === computerScore) {
    message = "You tied with the Computer. Try Again!";
  } else {
    message = "Loser! Computer wins the game ;(";
  }
  // Reports the winner
  console.log("Game is over \nResult: " + message);
  alert(
    `Thank You for playing! \nThe score is: \nPlayer: ${playerScore} - Computer: ${computerScore} \n${message}`
  );
};

finalCompare();

let i = 0;
while (i < 2) {
  const openPopUp = function () {
    return window.confirm("Do you want to play another round?");
  };
  again = openPopUp();

  if (again) {
    game();
    finalCompare();
    i++;
  } else {
    alert("Thanks for playing!");
  }
}
