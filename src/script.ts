const fieldsElements: NodeListOf<Element> = document.querySelectorAll('.board-item');

const fields: string[] = ['','','','','','','','','']

let activePlayer: string = 'X';

const winningConditions: Array<number[]> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

fieldsElements.forEach((field) => {
    field.addEventListener('click', (e) => {

            const target = e.target as HTMLElement;
            const {pos}: any = target.dataset;
            console.log(pos);

            if(fields[pos] === ""){
                fields[pos] = activePlayer;
                target.classList.add(`board-item-${activePlayer}`);
                activePlayer = activePlayer === 'X' ? 'O' : 'X';
            }
        })
})
