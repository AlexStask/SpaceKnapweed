var images = [];

function preloadImages() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

let displaySymbolsView = [[0, 1, 2, 3, 4],[0, 1, 2, 3, 4],[0, 1, 2, 3, 4]];

preloadImages('media/symbols/scatter.png',
    'media/symbols/T1.png',
    'media/symbols/T2.png',
    'media/symbols/T3.png',
    'media/symbols/T4.png',
    'media/symbols/T5.png');

let ctx = document.querySelector('#canvas').getContext('2d');
let gameParameters = {
    reelWidth: 0,
    lineWidth: 5,
}

const drawGameReels = () => {
    let windowWidth = document.body.clientWidth;
    let reelWidth = windowWidth * 0.6 / 5;
    gameParameters.reelWidth = reelWidth;

    // prepare canvas with responsive size
    canvas.width = reelWidth * 5;
    canvas.height = reelWidth * 3;

    // draw reels area
    ctx.beginPath();
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw reels dividers
    let drawReelWidth = 0;
    ctx.lineWidth = gameParameters.lineWidth;
    ctx.strokeStyle = 'white';
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    for (let i = 0; i < 4; i++) {
        drawReelWidth += reelWidth;
        ctx.beginPath();
        ctx.moveTo(drawReelWidth - gameParameters.lineWidth / 2, 0);
        ctx.lineTo(drawReelWidth - gameParameters.lineWidth / 2, reelWidth * 3);
        ctx.stroke();
    }
}

window.addEventListener('resize', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGameReels();
    displaySymbols();
});


const drawSymbol = (symbolImage, reel, row) => {
    let coordX = reel * gameParameters.reelWidth + gameParameters.lineWidth;
    let coordY = row * gameParameters.reelWidth;

    let newSymbol = new Image();
    ctx.globalAlpha = 1;
    newSymbol.src = symbolImage;
    newSymbol.onload = function () {
        ctx.drawImage(newSymbol, coordX, coordY, gameParameters.reelWidth * 0.9, gameParameters.reelWidth * 0.9);
        ctx.beginPath();
        ctx.stroke();
    };
}

const displaySymbols = async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGameReels();

    const view = displaySymbolsView;
    const symbolsInfo = await getSymbolsData();
    const getSymbolUrlById = (id) => {
        return symbolsInfo[id].link;
    };

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            let symbolImageURL = getSymbolUrlById(view[i][j]);
            let reel = j;
            let row = i;
            drawSymbol(symbolImageURL, reel, row);
        }
    }
}

const displayNewSpinSymbols = async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGameReels();

    const view = await getSymbolsView();
    displaySymbolsView = view;
    const symbolsInfo = await getSymbolsData();
    const getSymbolUrlById = (id) => {
        return symbolsInfo[id].link;
    };

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            let symbolImageURL = getSymbolUrlById(view[i][j]);
            let reel = j;
            let row = i;
            drawSymbol(symbolImageURL, reel, row);
        }
    }
}

drawGameReels();
displaySymbols();