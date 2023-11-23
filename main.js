// main.js

// gets pc choice
function getComputerChoice() {
  let randomGeneratedNumber = Math.floor((Math.random() * 10) % 9) + 1;

  if (randomGeneratedNumber <= 3) return "rock";
  else if (randomGeneratedNumber <= 6) return "paper";
  else return "scissors";
}

// gets the player choice
function getPlayerChoice() {
  return prompt("Rock Paper or Scissors?").toLowerCase();
}

// game loop
function game(playerSelection, computerSelection) {

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") return "Tie, Double Rocks!";
      if (computerSelection === "paper") return "You lost!, Paper beats Rock";
      if (computerSelection === "scissors") return "You won!, Rock beats Scissors";
      break;

    case "paper":
      if (computerSelection === "rock") return "You won!, Paper beats Rock";
      if (computerSelection === "paper") return "Tie, Double Papers!";
      if (computerSelection === "scissors") return "you lost!, Scissors beat Paper";
      break;

    case "scissors":
      if (computerSelection === "rock") return "You lost!, Rock beats Scissors";
      if (computerSelection === "paper") return "You won!, Scissors beat Paper!"
      if (computerSelection === "scissors") return "Tie, Double Scissors!";
      break;

    default:
      return "No valid input!";
  }
}

let pc, pl, response;

for (let i = 0; i < 5; i++) {
  pc = getComputerChoice();
  pl = getPlayerChoice();
  response = game(pl, pc);
  console.log(`Player choice : ${pl}
Computer choice: ${pc}
Result: ${response}`);
}
