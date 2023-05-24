
let cells =document.querySelectorAll(".cell");
let xPlayer = "X"
let oPlayer = "O"
let xTurn;
let oTurn;
let currentPlayer;
let drawCounter = 0;
let winner = false;


startGame();    
function startGame() {
    xTurn = true;
    cells.forEach((cell) => {
        cell.addEventListener("click", handleClick, {once: true});
    });
}

function handleClick(e) {
    let cell =e.target;
    if (xTurn){
        cell.innerText = xPlayer;
        currentPlayer = xPlayer;
        console.log(`${currentPlayer}player`)
    } else {
        cell.innerText = oPlayer;
        currentPlayer = oPlayer;
        console.log(`${currentPlayer}player`)
    }
    drawCounter++
    swap();
    if (checkWinner(currentPlayer)) {
        endGame(currentPlayer);
    } else if (drawCounter === 9) {
        endGame();
    }
}

function swap() {
    xTurn = !xTurn;
}

function checkWinner(currentPlayer) {
    if (currentPlayer === xPlayer){
        if ((cells[0].innerText === xPlayer && 
                cells[1].innerText === xPlayer && 
                cells[2].innerText === xPlayer) || 
            (cells[3].innerText === xPlayer && 
                cells[4].innerText === xPlayer && 
                cells[5].innerText === xPlayer) ||
            (cells[6].innerText === xPlayer && 
                cells[7].innerText === xPlayer && 
                cells[8].innerText === xPlayer) ||
            (cells[0].innerText === xPlayer && 
                cells[3].innerText === xPlayer && 
                cells[6].innerText === xPlayer) ||
            (cells[1].innerText === xPlayer && 
                cells[4].innerText === xPlayer && 
                cells[7].innerText === xPlayer) ||
            (cells[2].innerText === xPlayer && 
                cells[5].innerText === xPlayer && 
                cells[8].innerText === xPlayer) ||
            (cells[0].innerText === xPlayer && 
                cells[4].innerText === xPlayer && 
                cells[8].innerText === xPlayer) ||
            (cells[2].innerText === xPlayer && 
                cells[4].innerText === xPlayer && 
                cells[6].innerText === xPlayer)
        ) {
            console.log("x wins");
            winner = true;
            return winner;
        }
    } else if (currentPlayer === oPlayer){
        if ((cells[0].innerText === oPlayer && 
                cells[1].innerText === oPlayer && 
                cells[2].innerText === oPlayer) || 
            (cells[3].innerText === oPlayer && 
                cells[4].innerText === oPlayer && 
                cells[5].innerText === oPlayer) ||
            (cells[6].innerText === oPlayer && 
                cells[7].innerText === oPlayer && 
                cells[8].innerText === oPlayer) ||
            (cells[0].innerText === oPlayer && 
                cells[3].innerText === oPlayer && 
                cells[6].innerText === oPlayer) ||
            (cells[1].innerText === oPlayer && 
                cells[4].innerText === oPlayer && 
                cells[7].innerText === oPlayer) ||
            (cells[2].innerText === oPlayer && 
                cells[5].innerText === oPlayer && 
                cells[8].innerText === oPlayer) ||
            (cells[0].innerText === oPlayer && 
                cells[4].innerText === oPlayer && 
                cells[8].innerText === oPlayer) ||
            (cells[2].innerText === oPlayer && 
                cells[4].innerText === oPlayer && 
                cells[6].innerText === oPlayer)
        ) {
            console.log("o wins");
            winner = true;
            return winner;
        } else {
            console.log("It's Draw!")
        }
    }
}

function endGame(currentPlayer) {
    if (currentPlayer) {
        document.querySelector(".winningMessage").innerText = `${currentPlayer} wins`;
    } else {
        document.querySelector(".winningMessage").innerText = `It's a draw!`;
    }
    cells.forEach((cell) => {
        cell.removeEventListener("click", handleClick);
    });
}

function restartGame() {
    cells.forEach((cell) => {
        cell.innerText = "";
        cell.addEventListener("click", handleClick, {once: true});
    });
    drawCounter = 0;
    winner = false;
    document.querySelector(".winningMessage").innerText = "";
    startGame();
}

const playAgainButton = document.querySelector("#reset");
playAgainButton.addEventListener("click", restartGame);