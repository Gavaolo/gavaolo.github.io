const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll(".button-choice")
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => handleChoice(e)))

function handleChoice(e) {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

  switch (randomNumber) {
      case 1:
        computerChoice = rock
        break
      case 2:
        computerChoice = scissors
        break
      case 3:
        computerChoice = paper
        break
  }
  computerChoiceDisplay.innerHTML= computerChoice
}

function getResult() {
  if (computerChoice == userChoice) {
    result = "It's a draw!"
  }
  if (computerChoice == rock && userChoice == paper) {
    result = "You win!"
  }
  if (computerChoice == rock && userChoice == scissors) {
    result = "You lost!"
  }
  if (computerChoice == paper && userChoice == scissors) {
    result = "You win!"
  }
  if (computerChoice == paper && userChoice == rock) {
    result = "You lost!"
  }
  if (computerChoice == scissors && userChoice == rock) {
    result = "You win!"
  }
  if (computerChoice == scissors && userChoice == paper) {
    result = "You lost!"
  }
  
  resultDisplay.innerHTML= result
}
