const board = document.querySelector(".grid")
const result = document.querySelector("#result")
const displayCurrentPlayer = document.querySelector("#current-player")
const boardWidth = 7
const boardHeight = 7
const squareWidth = 20
const squareHeight = squareWidth
let currentPlayer = 1
let squares = []

function createBoard() {
    board.style.width = boardWidth * squareWidth + "px"
    board.style.height = boardHeight * squareHeight + "px"
    for (let i = 0; i < (boardWidth * boardHeight); i++) {
        squares[i] = document.createElement("div")
        squares[i].classList.add("square")
        squares[i].style.width = squareWidth + "px"
        squares[i].style.height = squareHeight + "px"
        if (i >= ((boardWidth * boardHeight) - boardWidth)) squares[i].classList.add("taken")
        board.appendChild(squares[i])
    }
}

function checkBoard() {

}

createBoard()

squares.forEach((square, i) => {
    square.onclick = () => {
        // if the square below your current square is taken, you can go on top of it
        if (squares[i + boardWidth].classList.contains("taken") &&! squares[i].classList.contains("taken")) {
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