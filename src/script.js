var fieldsElements = document.querySelectorAll('.board-item');
var fields = ['', '', '', '', '', '', '', '', ''];
var activePlayer = 'X';
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
