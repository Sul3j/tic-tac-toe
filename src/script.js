var fieldsElements = document.querySelectorAll('.board-item');
var fields = ['', '', '', '', '', '', '', '', ''];
var activePlayer = 'X';
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
fieldsElements.forEach(function (field) {
    field.addEventListener('click', function (e) {
        var target = e.target;
        var pos = target.dataset.pos;
        console.log(pos);
        if (fields[pos] === "") {
            fields[pos] = activePlayer;
            target.classList.add("board-item-" + activePlayer);
            activePlayer = activePlayer === 'X' ? 'O' : 'X';
        }
    });
});
