function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function startGame() {
    let board = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]

    board[getRandomInt(16)-1] = getRandomInt(2) * 2;
    board[getRandomInt(16)-1] = getRandomInt(2) * 2;
    return board;
}
board = startGame();
console.log(board);
renderBoard();
let prevBoard = board;

function renderBoard() {
    let gameBoardCell = document.querySelectorAll(".cell");
    //console.log(gameBoard);
    for (let i = 0; i < 16; i++) {
        if (board[i] !== 0) {
            gameBoardCell[i].innerHTML = board[i];
            gameBoardCell[i].id = 'value' + board[i];
        }
        else {
            gameBoardCell[i].innerHTML = '';
            gameBoardCell[i].id = 'value0';
        }
    }
}

btnNewGame = document.querySelector('.new-game');
btnNewGame.onclick = function() {
    board = startGame();
    renderBoard();
    console.log('Started New Game');
}

function moveUp(prevBoard) {
    console.log('Up');
    let gameBoard = document.querySelectorAll('.cell');
    for (let fuck = 0; fuck < 3; fuck++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (gameBoard[i + 4 * j - 4].classList[1] !== 'used') {
                    if (board[i + 4 * j - 4] !== 0) {
                        if (board[i + 4 * j - 4] === board[i + 4 * j]) {
                            board[i + 4 * j - 4] = board[i + 4 * j] * 2;
                            board[i + 4 * j] = 0;
                            gameBoard[i + 4 * j - 4].classList[1] = 'used';
                        }
                    } else {
                        board[i + 4 * j - 4] = board[i + 4 * j];
                        board[i + 4 * j] = 0;
                    }
                }
            }
        }
    }
    if (board === prevBoard) return 1;
}

function moveDown(prevBoard) {
    console.log('Down');
    let gameBoard = document.querySelectorAll('.cell');
    for (let fuck = 0; fuck < 3; fuck++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j > -1; j--) {
                if (gameBoard[i + 4 * j + 4].classList[1] !== 'used') {
                    if (board[i + 4 * j + 4] !== 0) {
                        if (board[i + 4 * j + 4] === board[i + 4 * j]) {
                            board[i + 4 * j + 4] = board[i + 4 * j] * 2;
                            board[i + 4 * j] = 0;
                            gameBoard[i + 4 * j + 4].classList[1] = 'used';
                        }
                    } else {
                        board[i + 4 * j + 4] = board[i + 4 * j];
                        board[i + 4 * j] = 0;
                    }
                }
            }
        }
    }
    if (board === prevBoard) return 1;
}

function moveLeft(prevBoard) {
    console.log('Left');
    let gameBoard = document.querySelectorAll('.cell');
    for (let fuck = 0; fuck < 3; fuck++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (gameBoard[4 * i + j - 1].classList[1] !== 'used') {
                    if (board[4 * i + j - 1] !== 0) {
                        if (board[4 * i + j - 1] === board[4 * i + j]) {
                            board[4 * i + j - 1] = board[4 * i + j] * 2;
                            board[4 * i + j] = 0;
                            gameBoard[4 * i + j - 1].classList[1] = 'used';
                        }
                    } else {
                        board[4 * i + j - 1] = board[4 * i + j];
                        board[4 * i + j] = 0;
                    }
                }
            }
        }
    }
    if (board === prevBoard) return 1;
}

function moveRight(prevBoard) {
    console.log('Right');
    let gameBoard = document.querySelectorAll('.cell');
    for (let fuck = 0; fuck < 3; fuck++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j > -1; j--) {
                if (gameBoard[4 * i + j + 1].classList[1] !== 'used') {
                    if (board[4 * i + j + 1] !== 0) {
                        if (board[4 * i + j + 1] === board[4 * i + j]) {
                            board[4 * i + j + 1] = board[4 * i + j] * 2;
                            board[4 * i + j] = 0;
                            gameBoard[4 * i + j + 1].classList[1] = 'used';
                        }
                    } else {
                        board[4 * i + j + 1] = board[4 * i + j];
                        board[4 * i + j] = 0;
                    }
                }
            }
        }
    }
    if (board === prevBoard) return 1;
}

let countOfUnableMoves = [0, 0, 0, 0];
let stillPlaying = true;

function gameOver() {
    stillPlaying = false;
    let gameBoard = document.querySelector('.game-board');
    gameBoard.classList.add('game-over');
    console.log('ТЫ ЛОХ');
}

document.addEventListener('keydown', (event) => {
    if (stillPlaying === true) {
        let name = event.key;
        let code = event.code;
        prevBoard = board;
        console.log(name);
        let rightMove = false;
        if ((name === "ArrowUp") || (name === "w")) {
            moveUp(prevBoard);
            rightMove = true;
        }
        if ((name === "ArrowDown") || (name === "s")) {
            moveDown(prevBoard);
            rightMove = true;
        }
        if ((name === "ArrowLeft") || (name === "a")) {
            moveLeft(prevBoard);
            rightMove = true;
        }
        if ((name === "ArrowRight") || (name === "d")) {
            moveRight(prevBoard);
            rightMove = true;
        }
        if (rightMove) {
            let generateNewCell = getRandomInt(3);
            console.log(generateNewCell);
            if ((generateNewCell === 2)) {
                console.log('Generating New Cell...')
                let flag = false
                for (let pizdec = 0; pizdec < 16; pizdec++) {
                    if (board[pizdec] === 0) flag = true;
                }
                while (flag) {
                    let k = getRandomInt(16) - 1;
                    if (board[k] === 0) {
                        board[k] = getRandomInt(2) * 2;
                        flag = false;
                    }
                }
                console.log('Successfully!')
            }
        }
        renderBoard();
        let gameBoard = document.querySelector('.game-board');
        for (let fucking_i = 0; fucking_i < 16; fucking_i++) {
            gameBoard[fucking_i].classList.clear();
            gameBoard[fucking_i].classList.add('cell');
            if (gameBoard[fucking_i].innerHTML === 2048) winGame();
        }
    }
}, false);

document.querySelector('.surrender').onclick = function() {
    window.close();
}

function winGame() {
    document.querySelector('.won-game').style['zIndex'] = 1000;
    document.querySelector('.game-container').style['opacity'] = 0.3;
}