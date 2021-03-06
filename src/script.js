var fieldsElements = document.querySelectorAll('.board-item');
var panel = document.querySelector('.panel');
var resetButton = document.querySelector('.reset-button');
var fields;
var activePlayer;
var gameActive;
var setDefaults = function () {
    fields = ['', '', '', '', '', '', '', '', ''];
    activePlayer = 'X';
    gameActive = true;
};
var clearMessage = function () {
    panel.innerText = '';
};
setDefaults();
var winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
var displayWinMessage = function () {
    panel.innerText = "Gratulacje " + activePlayer + ", wygra\u0142e\u015B!";
};
var displayTieMessage = function () {
    panel.innerText = "Remis!";
};
var validateGame = function () {
    var gameWon = false;
    for (var i = 0; i <= 7; i++) {
        var _a = winningConditions[i], posA = _a[0], posB = _a[1], posC = _a[2];
        var value1 = fields[posA];
        var value2 = fields[posB];
        var value3 = fields[posC];
        if (value1 !== "" && value1 === value2 && value1 === value3) {
            gameWon = true;
            break;
        }
        if (gameWon) {
            gameActive = false;
            displayWinMessage();
        }
        else if (isBoardFull()) {
            gameActive = false;
            displayTieMessage();
        }
    }
};
var isBoardFull = function () {
    return fields.find(function (field) { return field === ''; }) === undefined;
};
fieldsElements.forEach(function (field) {
    field.addEventListener('click', function (e) {
        var target = e.target;
        var pos = target.dataset.pos;
        console.log(pos);
        if (gameActive && fields[pos] === "") {
            fields[pos] = activePlayer;
            target.classList.add("board-item-" + activePlayer);
            validateGame();
            activePlayer = activePlayer === 'X' ? 'O' : 'X';
        }
    });
});
var resetBoardClasses = function () {
    fieldsElements.forEach(function (field) {
        field.classList.remove("board-item-X", "board-item-O");
    });
};
var handleButtonClick = function () {
    setDefaults();
    resetBoardClasses();
    clearMessage();
};
resetButton.addEventListener('click', handleButtonClick);
