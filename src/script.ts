const fieldsElements: NodeListOf<Element> = document.querySelectorAll('.board-item');
const panel: HTMLParagraphElement = document.querySelector('.panel'); 
const resetButton: HTMLButtonElement = document.querySelector('.reset-button');

let fields: string[];
let activePlayer: string;
let gameActive: boolean;

const setDefaults = (): void => {
    fields = ['','','','','','','','',''];
    activePlayer = 'X';
    gameActive = true;
} 

const clearMessage = (): void => {
    panel.innerText = '';
}

setDefaults();

const winningConditions: Array<number[]> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const displayWinMessage = (): void => {
    panel.innerText = `Gratulacje ${activePlayer}, wygrałeś!`;
}

const validateGame = (): void => {
    for(let i: number = 0; i <= 7; i++) {
        const [posA, posB, posC]: number[] = winningConditions[i];
        const value1: string = fields[posA];
        const value2: string = fields[posB];
        const value3: string = fields[posC];

        if(value1 !== "" && value1 === value2 && value1 === value3) {
            gameActive = false;
            displayWinMessage();
        }
    }
}

fieldsElements.forEach((field): void => {
    field.addEventListener('click', (e) => {

            const target = e.target as HTMLElement;
            const {pos}: any = target.dataset;
            console.log(pos);

            if(gameActive && fields[pos] === ""){
                fields[pos] = activePlayer;
                target.classList.add(`board-item-${activePlayer}`);
                validateGame();
                activePlayer = activePlayer === 'X' ? 'O' : 'X';
            }
        })
})

const handleButtonClick = (): void => {
    setDefaults();
    fieldsElements.forEach(field => {
        field.classList.remove("board-item-X", "board-item-O");
    })
    clearMessage();
};

resetButton.addEventListener('click', handleButtonClick);
