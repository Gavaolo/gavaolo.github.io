const board = document.querySelector(".grid")
const result = document.querySelector("#result")
const displayCurrentPlayer = document.querySelector("#current-player")
const boardWidth = 10
const boardHeight = 10
const boardTot = boardWidth * boardHeight
const squareWidth = 20
const squareHeight = squareWidth
let resetButton = null
let currentPlayer = 1
let squares = []
let winner = null

function createBoard() {
    board.style.width = boardWidth * squareWidth + "px"
    board.style.height = boardHeight * squareHeight + "px"
    result.innerHTML = "Connect four ball!"
    for (let i = 0; i < (boardWidth * (boardHeight + 1)); i++) {
        squares[i] = document.createElement("div")
        squares[i].classList.add("square")
        squares[i].setAttribute("id", i)
        squares[i].style.width = squareWidth + "px"
        squares[i].style.height = squareHeight + "px"
        if (i >= boardTot) squares[i].classList.add("taken")
        board.appendChild(squares[i])
    }
    resetButton = document.createElement("input")
    resetButton.setAttribute("type", "button")
    resetButton.setAttribute("value", "Reset")
    board.appendChild(resetButton)
}

function checkUp(start, player) {
    var cnt = 0
    if (start >= boardWidth * 3) {
        if (squares[start - boardWidth * 0].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 1].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 2].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkDw(start, player) {
    var cnt = 0
    if (start < (boardTot - boardWidth * 3)) {
        if (squares[start + boardWidth * 0].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 1].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 2].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkLt(start, player) {
    var cnt = 0
    if (start % boardWidth >= 3) {
        if (squares[start - 0].classList.contains(player)) cnt++
        if (squares[start - 1].classList.contains(player)) cnt++
        if (squares[start - 2].classList.contains(player)) cnt++
        if (squares[start - 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkRt(start, player) {
    var cnt = 0
    if (start % boardWidth < (boardWidth - 3)) {
        if (squares[start + 0].classList.contains(player)) cnt++
        if (squares[start + 1].classList.contains(player)) cnt++
        if (squares[start + 2].classList.contains(player)) cnt++
        if (squares[start + 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkUpRt(start, player) {
    var cnt = 0
    if ((start % boardWidth < (boardWidth - 3)) && (start >= boardWidth * 3)) {
        if (squares[start - boardWidth * 0 + 0].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 1 + 1].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 2 + 2].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 3 + 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkDwRt(start, player) {
    var cnt = 0
    if ((start % boardWidth < (boardWidth - 3)) && (start < (boardTot - boardWidth * 3))) {
        if (squares[start + boardWidth * 0 + 0].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 1 + 1].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 2 + 2].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 3 + 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkDwLt(start, player) {
    var cnt = 0
    if ((start % boardWidth >= 3) && (start < (boardTot - boardWidth * 3))) {
        if (squares[start + boardWidth * 0 - 0].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 1 - 1].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 2 - 2].classList.contains(player)) cnt++
        if (squares[start + boardWidth * 3 - 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    }
}

function checkUpLt(start, player) {
    var cnt = 0
    if ((start % boardWidth >= 3) && (start >= boardWidth * 3)) {
        if (squares[start - boardWidth * 0 - 0].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 1 - 1].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 2 - 2].classList.contains(player)) cnt++
        if (squares[start - boardWidth * 3 - 3].classList.contains(player)) cnt++
        if (cnt==4) foundWinner(player)
    } 
}

function foundWinner(player) {
    result.innerHTML = "Player " + currentPlayer + " is the winner!"
    winner = currentPlayer
}

function checkBoard(start, player) {
    checkUp(start, player)
    checkDw(start, player)
    checkLt(start, player)
    checkRt(start, player)
    checkUpRt(start, player)
    checkDwRt(start, player)
    checkDwLt(start, player)
    checkUpLt(start, player)
}

createBoard()

squares.forEach((square, i) => {
    square.onclick = () => {
        // if the square below your current square is taken, you can go on top of it
        if (winner == null) {
            if (squares[i + boardWidth].classList.contains("taken") &&! squares[i].classList.contains("taken")) {
                if (currentPlayer == 1) {
                    square.classList.add("taken")
                    square.classList.add("player-one")
                    checkBoard(i, "player-one")
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer == 2) {
                    square.classList.add("taken")
                    square.classList.add("player-two")
                    checkBoard(i, "player-two")
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            } else {
                alert("Can't go here")
            }
        }
    }    
})

resetButton.onclick = () => {
    winner = null
    result.innerHTML = "Connect four ball!"
    for (let i = 0; i < (boardWidth * (boardHeight + 1)); i++) {
        squares[i].classList.remove("player-one")
        squares[i].classList.remove("player-two")
        squares[i].classList.remove("taken")
        if (i >= boardTot) squares[i].classList.add("taken")
    }
}