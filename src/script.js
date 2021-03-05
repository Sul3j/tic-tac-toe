var fields = document.querySelectorAll('.board-item');
var activePlayer = 'X';
fields.forEach(function (field) {
    field.addEventListener('click', function (e) {
        e.target.classList.add("board-item-" + activePlayer);
        activePlayer = activePlayer === 'X' ? 'O' : 'X';
    });
});
