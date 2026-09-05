let playerRed ="R"
let playerYellow = "Y"

let curPlayer = playerRed;

let gameOver = false;
let board;

let rows = 6;
let collumns = 7;

window.onload = function () {
    setGame();
}
function setGame(){
    board = [];
        for (let r =0 ; r < rows ; r++){
            let row = [];
            for(let c = 0; c< collumns ;c++){
                row.push(" ")

                let tile = document.createElement("div");
                tile.id = r.toString() + "." +c.toString()

                tile.classList.add("tile");
                document.getElementById('board').append(tile)
            }
        }
}