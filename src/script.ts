const fields: NodeListOf<Element> = document.querySelectorAll('.board-item');
let activePlayer: string = 'X';

fields.forEach((field) => {
    field.addEventListener('click', (e) => {
            e.target.classList.add(`board-item-${activePlayer}`);
            activePlayer = activePlayer === 'X' ? 'O' : 'X';
        }
    })
})