const grid = document.querySelector(".grid")
const blockWidth = 100
const blockHeight = 20
const xGap = 110
const yGap = 30
const boardWidth = grid.offsetWidth

const userStart = [230, 10]
let currentPosition = userStart

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
    currentPosition[0] = Math.min(Math.max(currentPosition[0], 10), boardWidth-blockWidth-10)
    user.style.left = currentPosition[0] + "px"
    user.style.bottom = currentPosition[1] + "px" 
}

//move user
function moveUser(e) {
    switch(e.key) {
        case "ArrowLeft":
            currentPosition[0] -= 10
            drawUser()
            break;
        
        case "ArrowRight":
            currentPosition[0] += 10
            drawUser()
            break;
    }
}

document.addEventListener("keydown", moveUser)