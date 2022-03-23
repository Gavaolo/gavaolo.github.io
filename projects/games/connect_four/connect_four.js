const squares = document.querySelectorAll(".grid div")
const result = document.querySelector("#result")
const displayCurrentPlayer = document.querySelector("#current-player")
let currentPlayer = 1

function checkBoard() {

}

squares.forEach((square, i) => {
    square.onclick = () => {
        //if the square below your current square is taken, you can go on top of it
        if (squares[i + 7].classList.contains("taken") &&! squares[i].classList.contains("taken")) {
            if (currentPlayer == 1) {
                square.classList.add("taken")
                square.classList.add("player-one")
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if (currentPlayer == 2) {
                square.classList.add("taken")
                square.classList.add("player-two")
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            }
        } else {
            alert("Can't go here")
        }
        checkBoard()
    }    
});