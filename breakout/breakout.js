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
user.classList.add("block")
drawUser()
grid.appendChild(user)

//darw user
function drawUser() {
    userCurrentPosition.x = Math.min(Math.max(userCurrentPosition.x, 10), boardWidth-blockWidth-10)
    user.style.left = userCurrentPosition.x + "px"
    user.style.bottom = userCurrentPosition.y + "px" 
    user.bottomLeft = {x: userCurrentPosition.x, y: userCurrentPosition.y}
    user.bottomRight = {x: userCurrentPosition.x + blockWidth, y: userCurrentPosition.y}
    user.topLeft = {x: userCurrentPosition.x, y: userCurrentPosition.y + blockHeight}
    user.topRight = {x: userCurrentPosition.x + blockWidth, y: userCurrentPosition.y + blockHeight}
}

//draw ball
function drawBall() {
    ballCurrentPosition.x = Math.min(Math.max(ballCurrentPosition.x, 0), boardWidth-ball.offsetWidth)
    ballCurrentPosition.y = Math.min(Math.max(ballCurrentPosition.y, 0), boardHeight-ball.offsetHeight)
    ball.style.left = ballCurrentPosition.x + "px"
    ball.style.bottom = ballCurrentPosition.y + "px" 
    ball.bottomLeft = {x: ballCurrentPosition.x, y: ballCurrentPosition.y}
    ball.bottomRight = {x: ballCurrentPosition.x + ball.offsetWidth, y: ballCurrentPosition.y}
    ball.topLeft = {x: ballCurrentPosition.x, y: ballCurrentPosition.y + ball.offsetHeight}
    ball.topRight = {x: ballCurrentPosition.x + ball.offsetWidth, y: ballCurrentPosition.y + ball.offsetHeight}
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
            (ball.bottomRight.x >= blocks[i].topLeft.x) &&
            (ball.bottomLeft.x <= blocks[i].topRight.x) &&
            (ball.topLeft.y > blocks[i].bottomLeft.y) &&
            (ball.topLeft.y < blocks[i].topLeft.y)
        ) {
            const allBlocks = Array.from(document.querySelectorAll(".block"))
            allBlocks[i].classList.remove("block")
            blocks.splice(i,1)
            yDirection = -yDirection
            score++
            scoreDisplay.innerHTML = score
            console.log(user.width);
        }

        //check for win
        if (blocks.length === 0) {
            scoreDisplay.innerHTML = "You win"
            clearInterval(timerId)
            document.removeEventListener("keydown", moveUser)
        }
    }

    //check for wall collisions
    if (ball.topRight.x >= boardWidth || ball.topLeft.x <= 0) {xDirection = -xDirection}
    if (ball.topLeft.y >= boardHeight || ball.topLeft.y <= 0) {yDirection = -yDirection}

    // //check for user collision
    if (
        (ball.bottomRight.x >= user.topLeft.x) &&
        (ball.bottomLeft.x <= user.topRight.x) &&
        (ball.bottomLeft.y <= user.topLeft.y) &&
        (yDirection < 0)
    ) {yDirection = -yDirection}

    //check for game over
    if (ballCurrentPosition.y <= 0) {
        scoreDisplay.innerHTML = "Game over"
        clearInterval(timerId)
        document.removeEventListener("keydown", moveUser)
    }
}