const spinsHistory = [];
let spinsCounter = 0;

const getStopPositions = async () => {
    const dataItems = await getReelSet();
    let stopPositions = [];

    for (let i = 0; i < 5; i++) {
        let randomNumber = 0;
        do {
            randomNumber = Math.floor(Math.random() * 100);
        } while (randomNumber > dataItems[i].length - 3);

        stopPositions.push(randomNumber);
    }

    spinsHistory[spinsCounter] = {stopPositions: stopPositions};
    return stopPositions;
}

const getSymbolsView = async () => {
    const reelSet = await getReelSet();
    const view = [[],[],[]];
    let stopPositions = await getStopPositions();
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            view[i][j] = reelSet[j][stopPositions[j]];
        }
        stopPositions = stopPositions.map(n => n + 1);
    }
    spinsHistory.push(view);
    return view;
};

const getWinningLines = () => {};

const getRoundResult = () => {};

console.log(spinsHistory);