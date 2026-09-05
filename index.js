let playerRed = "R";
let playerYellow = "Y";

let curPlayer = playerRed;

let gameOver = false;
let board;

let rows = 6;
let columns = 7;

window.onload = function () {
    setGame();
};

function setGame() {
    board = [];
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

function setPiece(){
    if(gameOver){
        return;
    }

    let coords = this.id.split("-");
    
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    board[r][c] =curPlayer;
    let tile=this;

    if(curPlayer ==playerRed){
        tile.classList.add("red-piece");
        curPlayer = playerYellow;
    }else{
        tile.classList.add("yellow-piece");
        curPlayer = playerRed;

    }
}