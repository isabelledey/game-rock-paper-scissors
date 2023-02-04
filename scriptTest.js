const gameInput = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;

const computerPlay = () =>
  gameInput[Math.floor(Math.random() * gameInput.length)];

function gameRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock" && computerSelection) == "paper") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "rock" && playerSelection == "scissor") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (computerSelection == "paper" && playerSelection == "scissor") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "scissor" && playerSelection == "rock") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "scissor" && playerSelection == "paper") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == computerSelection) {
    console.log("Round Draw!!");
    /*return alert(
      `Round Draw!! Player Selected: ${playerSelection} Computer Selected ${computerSelection}`
    );*/
  } else {
    console.log("Wrong Input!! Try Again!");
    //return alert(`Wrong Input!! Try Again!`);
  }
}

function game() {
  let i = 1;
  while (i <= 5) {
    let playerSelection = prompt(`Choose rock, paper, scissor`)
      .toLowerCase()
      .replace(/\s+/g, "");

    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissor"
    ) {
      computerSelection = computerPlay();
      gameRound(playerSelection, computerSelection);
      console.log(`Round number: ${i}

      Player Selected: ${playerSelection}
      Computer Selected: ${computerSelection}
      `);
      i++;
    } else {
      console.log("Invalid input");
    }
  }
  scoreCard();
}

function scoreCard() {
  if (playerScore > computerScore) {
    console.log(`End Result:
    Player Wins the game!
    End of 5 Rounds Player Score: ${playerScore}
    End of 5 Rounds Computer Score: ${computerScore}
    `);
    return playerWins++;
  } else if (computerScore > playerScore) {
    console.log(`End Result:
    Computer Wins the game!
    End of 5 Rounds Computer Score: ${computerScore}
    End of 5 Rounds Player Score: ${playerScore}
    `);
    return playerWins++;
  } else if (playerScore == computerScore) {
    console.log(`End Result:
    Game Draw!
    End of 5 Rounds Player Wins Total To: ${playerWins}
    End of 5 Rounds Computer Wins Total To: ${computerWins}
    `);
    return;
  }
}

function gameWinner() {
  let i = 1;
  while (i <= 3) {
    if (
      (playerWins >= 1 || computerWins >= 1) &&
      (playerWins < 3 || computerWins < 3)
    ) {
      game();
      i++;
    } else if (playerWins == 3 && playerWins > computerWins) {
      console.log("Final Winner is Player!");
    } else if (computerWins == 3 && computerWins > playerWins) {
      console.log("Final Winner is Computer");
    }
  }
}

function main() {
  let i = 1;
  while (i <= 3) {
    game();
    i++;
  }
}

main();
console.log(`End of Game Player Wins: ${playerWins}`);
console.log(`End of Game Computer Wins: ${computerWins}`);

// function game() {
//   for (i = 1; i <= 5; i++) {
//     playerSelection = prompt("Enter Your Choice")
//       .toLowerCase()
//       .replace(/\s+/g, "");
//     computerSelection = computerPlay();
//     console.log("Round number: " + i);
//     gameRound(playerSelection, computerSelection);
//     console.log("Player Selected: " + playerSelection);
//     console.log("Computer Selected: " + computerSelection);
//   }
//   if (playerScore > computerScore) {
//     console.log("Player Wins the game!");
//     console.log("Player Score: " + playerScore);
//     console.log("Computer Score: " + computerScore);
//   } else if (computerScore > playerScore) {
//     console.log("Computer Wins the game!");
//     console.log("Player Score: " + playerScore);
//     console.log("Computer Score: " + computerScore);
//   } else {
//     console.log("Game Draw!");
//   }
// }
