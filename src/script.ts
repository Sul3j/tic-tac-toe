const fieldsElements: NodeListOf<Element> = document.querySelectorAll('.board-item');

const fields: string[] = ['','','','','','','','','']

let activePlayer: string = 'X';

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
