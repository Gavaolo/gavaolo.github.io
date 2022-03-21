const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
const blockWidth = 100
const blockHeight = 20
const xGap = blockWidth + 10
const yGap = blockHeight + 10
const boardWidth = grid.offsetWidth-1
const boardHeight = grid.offsetHeight-1
const userXMove = 20
const ballSpeed = 20
let timerId
let xDirection = 2
let yDirection = 2
let score = 0

const userStartPosition = {x: 230, y: 10}
let userCurrentPosition = userStartPosition

const ballStartPosition = {x: 270, y: 40}
let ballCurrentPosition = ballStartPosition

//create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = {x: xAxis, y: yAxis}
        this.bottomRight = {x: xAxis + blockWidth, y: yAxis}
        this.topLeft = {x: xAxis, y: yAxis + blockHeight}
        this.topRight = {x: xAxis + blockWidth, y: yAxis + blockHeight}
    }
}

//all blocks
const blocks = [

    //1st row
    new Block(10 + xGap * 0, 270),
    new Block(10 + xGap * 1, 270),
    new Block(10 + xGap * 2, 270),
    new Block(10 + xGap * 3, 270),
    new Block(10 + xGap * 4, 270),

    //2nd row
    new Block(10 + xGap * 0, 270 - yGap * 1),
    new Block(10 + xGap * 1, 270 - yGap * 1),
    new Block(10 + xGap * 2, 270 - yGap * 1),
    new Block(10 + xGap * 3, 270 - yGap * 1),
    new Block(10 + xGap * 4, 270 - yGap * 1),
 
    //3rd row 
    new Block(10 + xGap * 0, 270 - yGap * 2),
    new Block(10 + xGap * 1, 270 - yGap * 2),
    new Block(10 + xGap * 2, 270 - yGap * 2),
    new Block(10 + xGap * 3, 270 - yGap * 2),
    new Block(10 + xGap * 4, 270 - yGap * 2),
]

//draw block
function addBlock () {
    for (let i = 0; i<blocks.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft.x + "px"
        block.style.bottom = blocks[i].bottomLeft.y + "px"
        grid.appendChild(block)
    }
}

addBlock()

//add user
const user = document.createElement("div")
user.classList.add("user")
drawUser()
grid.appendChild(user)

//darw user
function drawUser() {
    userCurrentPosition.x = Math.min(Math.max(userCurrentPosition.x, 10), boardWidth-blockWidth-10)
    user.style.left = userCurrentPosition.x + "px"
    user.style.bottom = userCurrentPosition.y + "px" 
}

//draw ball
function drawBall() {
    ballCurrentPosition.x = Math.min(Math.max(ballCurrentPosition.x, 0), boardWidth-ball.offsetWidth)
    ballCurrentPosition.y = Math.min(Math.max(ballCurrentPosition.y, 0), boardHeight-ball.offsetHeight)
    ball.style.left = ballCurrentPosition.x + "px"
    ball.style.bottom = ballCurrentPosition.y + "px" 
}

//move user
function moveUser(e) {
    switch(e.key) {
        case "ArrowLeft":
            userCurrentPosition.x -= userXMove
            drawUser()
            break;
        
        case "ArrowRight":
            userCurrentPosition.x += userXMove
            drawUser()
            break;
    }
}

document.addEventListener("keydown", moveUser)

//add ball
const ball = document.createElement("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)

//move ball
function moveBall() {
    ballCurrentPosition.x += xDirection
    ballCurrentPosition.y += yDirection
    drawBall()
    checkForCollisions()
}

timerId = setInterval(moveBall, ballSpeed)

//check for collisions
function checkForCollisions() {

    //check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        
        if (
            (ballCurrentPosition.x >= blocks[i].bottomLeft.x) &&
            (ballCurrentPosition.x <= blocks[i].bottomRight.x) &&
            (ballCurrentPosition.y + ball.offsetHeight > blocks[i].bottomLeft.y) &&
            (ballCurrentPosition.y < blocks[i].topLeft.y)
        ) {
            const allBlocks = Array.from(document.querySelectorAll(".block"))
            allBlocks[i].classList.remove("block")
            blocks.splice(i,1)
            changeDirection()
            score++
            scoreDisplay.innerHTML = score
        }

        //check for win
        if (blocks.length === 0) {
            scoreDisplay.innerHTML = "You win"
            clearInterval(timerId)
            document.removeEventListener("keydown", moveUser)
        }
    }

    //check for wall collisions
    if (
        (ballCurrentPosition.x >= (boardWidth-ball.offsetWidth)) || 
        (ballCurrentPosition.x <= 0) || 
        (ballCurrentPosition.y >= (boardHeight-ball.offsetHeight))
    ) {
        changeDirection()
    }

    //check for user collision
    if (ballCurrentPosition.x > userCurrentPosition.x && 
        ballCurrentPosition.x < userCurrentPosition.x + blockWidth &&
        ballCurrentPosition.y > userCurrentPosition.y &&
        ballCurrentPosition.y < userCurrentPosition.y + blockHeight
    ) {
        changeDirection()
    }

    //check for game over
    if (ballCurrentPosition.y <= 0) {
        scoreDisplay.innerHTML = "Game over"
        clearInterval(timerId)
        document.removeEventListener("keydown", moveUser)
    }
}

function changeDirection() {
    if ((xDirection > 0) && (yDirection > 0)) {yDirection = -yDirection; return}
    if ((xDirection > 0) && (yDirection < 0)) {xDirection = -xDirection; return}
    if ((xDirection < 0) && (yDirection < 0)) {yDirection = -yDirection; return}
    if ((xDirection < 0) && (yDirection > 0)) {xDirection = -xDirection; return}
}