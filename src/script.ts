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

const displayTieMessage = (): void => {
    panel.innerText = `Remis!`;
}

const validateGame = (): void => {
    let gameWon: boolean = false;
    for(let i: number = 0; i <= 7; i++) {
        const [posA, posB, posC]: number[] = winningConditions[i];
        const value1: string = fields[posA];
        const value2: string = fields[posB];
        const value3: string = fields[posC];

        if(value1 !== "" && value1 === value2 && value1 === value3) {
            gameWon = true;
            break;
        }
        if (gameWon) {
            gameActive = false;
            displayWinMessage();
        } else if (isBoardFull()) {
            gameActive = false;
            displayTieMessage();
        }
    }
}

const isBoardFull = (): boolean => {
    return fields.find(field => field === '') === undefined; 
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

const resetBoardClasses = (): void => {
    fieldsElements.forEach(field => {
        field.classList.remove("board-item-X", "board-item-O");
    })
} 

const handleButtonClick = (): void => {
    setDefaults();
    resetBoardClasses();
    clearMessage();
};

resetButton.addEventListener('click', handleButtonClick);
