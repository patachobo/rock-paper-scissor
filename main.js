// main.js

function getComputerChoice() {
  let randomGeneratedNumber = Math.floor((Math.random() * 10) % 9) + 1;

  if (randomGeneratedNumber <= 3) return "rock";
  else if (randomGeneratedNumber <= 6) return "paper";
  else return "scissors";
}

for (let i = 0; i < 50; i++) {
  let pc = getComputerChoice();
  console.log(pc);
}
