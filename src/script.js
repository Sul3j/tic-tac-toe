var fieldsElements = document.querySelectorAll('.board-item');
var panel = document.querySelector('.panel');
var fields = ['', '', '', '', '', '', '', '', ''];
var activePlayer = 'X';
var gameActive = true;
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
var validateGame = function () {
    for (var i = 0; i <= 7; i++) {
        var _a = winningConditions[i], posA = _a[0], posB = _a[1], posC = _a[2];
        var value1 = fields[posA];
        var value2 = fields[posB];
        var value3 = fields[posC];
        if (value1 !== "" && value1 === value2 && value1 === value3) {
            gameActive = false;
            displayWinMessage();
        }
    }
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
