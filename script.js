let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];

const cellElements = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            cell.innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

resetBtn.addEventListener('click', () => {
    currentPlayer = 'X';
    gameBoard = ['','','','','','','','',''];
    cellElements.forEach((cell) => {
        cell,innerText = '';
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const combination of winningCombinations) {
        if (
            gameBoard[combination[0]] !== '' &&
            gameBoard[combination[0]] === gameBoard[combination[1]] &&
            gameBoard[combination[0]] === gameBoard[combination[2]]
        ) {
            alert(`Player ${gameBoard[combination[0]]} wins!!`);
            resetGame();
            return;
        }
    }
    

    if (!gameBoard.includes('')){
        alert('it\'s a draw!');
        resetGame();
    }
}


function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['','','','','','','','',''];
    cellElements.forEach((cell) => {
        cell.innerText = '';
    });
}
