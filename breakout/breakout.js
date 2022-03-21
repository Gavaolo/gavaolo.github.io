const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
const blockWidth = 100
const blockHeight = 20
const xGap = 110
const yGap = 30
const boardWidth = grid.offsetWidth-1
const boardHeight = grid.offsetHeight-1
const userXMove = 20
const ballSpeed = 20
let timerId
let xDirection = 2
let yDirection = 2
let score = 0

const userStartPosition = [230, 10]
let userCurrentPosition = userStartPosition

const ballStartPosition = [270, 40]
let ballCurrentPosition = ballStartPosition
//create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all blocks
const blocks = [
    //1st row
    new Block(10 + xGap * 0,270),
    new Block(10 + xGap * 1,270),
    new Block(10 + xGap * 2,270),
    new Block(10 + xGap * 3,270),
    new Block(10 + xGap * 4,270),

    //2nd row
    new Block(10 + xGap * 0,270 - yGap * 1),
    new Block(10 + xGap * 1,270 - yGap * 1),
    new Block(10 + xGap * 2,270 - yGap * 1),
    new Block(10 + xGap * 3,270 - yGap * 1),
    new Block(10 + xGap * 4,270 - yGap * 1),

    //3rd row
    new Block(10 + xGap * 0,270 - yGap * 2),
    new Block(10 + xGap * 1,270 - yGap * 2),
    new Block(10 + xGap * 2,270 - yGap * 2),
    new Block(10 + xGap * 3,270 - yGap * 2),
    new Block(10 + xGap * 4,270 - yGap * 2),
]

//draw block
function addBlock () {

    for (let i = 0; i<blocks.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft[0] + "px"
        block.style.bottom = blocks[i].bottomLeft[1] + "px"
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
    userCurrentPosition[0] = Math.min(Math.max(userCurrentPosition[0], 10), boardWidth-blockWidth-10)
    user.style.left = userCurrentPosition[0] + "px"
    user.style.bottom = userCurrentPosition[1] + "px" 
}

//draw ball
function drawBall() {
    ballCurrentPosition[0] = Math.min(Math.max(ballCurrentPosition[0], 0), boardWidth-ball.offsetWidth)
    ballCurrentPosition[1] = Math.min(Math.max(ballCurrentPosition[1], 0), boardHeight-ball.offsetHeight)
    ball.style.left = ballCurrentPosition[0] + "px"
    ball.style.bottom = ballCurrentPosition[1] + "px" 
}

//move user
function moveUser(e) {
    switch(e.key) {
        case "ArrowLeft":
            userCurrentPosition[0] -= userXMove
            drawUser()
            break;
        
        case "ArrowRight":
            userCurrentPosition[0] += userXMove
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
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

timerId = setInterval(moveBall, ballSpeed)

//check for collisions
function checkForCollisions() {
    //check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        
        if (
            (ballCurrentPosition[0] >= blocks[i].bottomLeft[0]) &&
            (ballCurrentPosition[0] <= blocks[i].bottomRight[0]) &&
            (ballCurrentPosition[1] + ball.offsetHeight > blocks[i].bottomLeft[1]) &&
            (ballCurrentPosition[1] < blocks[i].topLeft[1])
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
        (ballCurrentPosition[0] >= (boardWidth-ball.offsetWidth)) || 
        (ballCurrentPosition[0] <= 0) || 
        (ballCurrentPosition[1] >= (boardHeight-ball.offsetHeight))
    ) {
        changeDirection()
    }

    //check for user collision
    if (ballCurrentPosition[0] > userCurrentPosition[0] && 
        ballCurrentPosition[0] < userCurrentPosition[0] + blockWidth &&
        ballCurrentPosition[1] > userCurrentPosition[1] &&
        ballCurrentPosition[1] < userCurrentPosition[1] + blockHeight
    ) {
        changeDirection()
    }

    //check for game over
    if (ballCurrentPosition[1] <= 0) {
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