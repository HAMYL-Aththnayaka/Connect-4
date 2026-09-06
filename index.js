let playerRed = "R";
let playerYellow = "Y";
let winnerMusic = new Audio( './assets/winner.mp3');

let curPlayer = playerRed;

let gameOver = false;
let board;

let curColumns;

let rows = 6;
let columns = 7;

window.onload = function () {
    setGame();
};

function setGame() {
    board = [];
    curColumns = [5 ,5 ,5 ,5 ,5 ,5 ,5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(" ");

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click",setPiece)
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}
function checkWinner() {
    //sliding window
    // 1. Horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== " ") {
                if (
                    board[r][c] === board[r][c + 1] &&
                    board[r][c + 1] === board[r][c + 2] &&
                    board[r][c + 2] === board[r][c + 3]
                ) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // 2. Vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] !== " ") {
                if (
                    board[r][c] === board[r + 1][c] &&
                    board[r + 1][c] === board[r + 2][c] &&
                    board[r + 2][c] === board[r + 3][c]
                ) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // 3. Diagonal 
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== " ") {
                if (
                    board[r][c] === board[r + 1][c + 1] &&
                    board[r + 1][c + 1] === board[r + 2][c + 2] &&
                    board[r + 2][c + 2] === board[r + 3][c + 3]
                ) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // 4. Anti-Diagonal 
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== " ") {
                if (
                    board[r][c] === board[r - 1][c + 1] &&
                    board[r - 1][c + 1] === board[r - 2][c + 2] &&
                    board[r - 2][c + 2] === board[r - 3][c + 3]
                ) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r ,c ){
    let winner = document.getElementById("winner");
    if(board[r][c] == playerRed){
        winner.innerText = "RED Wins !!!";
        winnerMusic.play();
        gameOver = true;
    }else{
        winner.innerText = "Yellow Wins !!!";
        winnerMusic.play();
        gameOver = true;
    }
    
}

function setPiece(){
    if(gameOver){
        return;
    }

    let coords = this.id.split("-");
    
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = curColumns[c];
    if(r<0){
        return;
    }

    board[r][c] =curPlayer;
    let tile=document.getElementById( r.toString() + "-" + c.toString());

    if(curPlayer ==playerRed){
        tile.classList.add("red-piece");
        curPlayer = playerYellow;
    }else{
        tile.classList.add("yellow-piece");
        curPlayer = playerRed;
    }

    // update the row height for the column
    r -= 1 ;
    curColumns[c] = r;
    checkWinner();
}