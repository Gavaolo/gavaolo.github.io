const cardArray = [
  {
    name: "fries",
    image: "https://images.emojiterra.com/google/android-10/512px/1f35f.png"
  },
  {
    name: "cheesburger",
    image: "https://images.emojiterra.com/google/android-10/512px/1f354.png"
  },
  {
    name: "hotdog",
    image: "https://images.emojiterra.com/google/android-pie/512px/1f32d.png"
  },
  {
    name: "icecream",
    image: "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f366.png"
  },
  {
    name: "milkshake",
    image: "https://images.emojiterra.com/google/android-11/512px/1f9cb.png"
  },
  {
    name: "pizza",
    image: "https://images.emojiterra.com/twitter/512px/1f355.png"
  },
  {
    name: "fries",
    image: "https://images.emojiterra.com/google/android-10/512px/1f35f.png"
  },
  {
    name: "cheesburger",
    image: "https://images.emojiterra.com/google/android-10/512px/1f354.png"
  },
  {
    name: "hotdog",
    image: "https://images.emojiterra.com/google/android-pie/512px/1f32d.png"
  },
  {
    name: "icecream",
    image: "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f366.png"
  },
  {
    name: "milkshake",
    image: "https://images.emojiterra.com/google/android-11/512px/1f9cb.png"
  },
  {
    name: "pizza",
    image: "https://images.emojiterra.com/twitter/512px/1f355.png"
  }
]

const blankCard = "https://images.emojiterra.com/google/android-11/512px/1f9e7.png"
const winCard = "https://github.com/kubowania/memory-game/blob/master/images/white.png?raw=true"

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createCard(item,i){
  const card = document.createElement("img")
  card.setAttribute("data-id", i)
  card.setAttribute("src", blankCard)
  card.style.maxWidth = "100px"
  card.addEventListener("click",flipCard)
  gridDisplay.append(card)
}

function createBoard(arr) {
  arr.forEach((item,i) => createCard(item,i))
}

createBoard(cardArray)

function checkMatch(){
  const cards = document.querySelectorAll("#grid img")
  const optOneId = cardsChosenIds[0]
  const optTwoId = cardsChosenIds[1]
  
  if (optOneId == optTwoId){
    alert("You cliecked the same image!")
    cardsChosenIds = cardsChosenIds.slice(0,0)
    cardsChosen = cardsChosen.slice(0,0)
  }else{
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!")
      cards[optOneId].setAttribute("src",winCard)
      cards[optTwoId].setAttribute("src",winCard)
      cards[optOneId].removeEventListener("click",flipCard)
      cards[optTwoId].removeEventListener("click",flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optOneId].setAttribute("src",blankCard)
      cards[optTwoId].setAttribute("src",blankCard)
      alert("Sorry try again!")
    } 
    cardsChosen = []
    cardsChosenIds = []
  }
  
  resultDisplay.innerHTML = cardsWon.length
  
  if (cardsWon.length == cardArray.length/2) {
    resultDisplay.innerHTML = "Congratulations you found them all!"
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id")
  cardsChosen.push(cardArray[cardId].name)
  this.setAttribute("src",cardArray[cardId].image)
  cardsChosenIds.push(cardId)
  if (cardsChosen.length>=2){
    setTimeout(checkMatch,500)
  }
  console.log(cardsChosenIds)
  console.log(cardsChosen)
}