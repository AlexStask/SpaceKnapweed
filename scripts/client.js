let ctx = document.querySelector('#canvas').getContext('2d');

let gameParameters = {
    reelWidth: 0,
}

function drawGameReels() {
    let windowWidth = document.body.clientWidth;
    //let windowHeight = document.body.clientHeight;
    let reelWidth = windowWidth * 0.6 / 5;
    gameParameters.reelWidth = reelWidth;

    // prepare canvas with responsive size
    canvas.style.width = `${reelWidth * 5}px`;
    canvas.style.height = `${reelWidth * 3}px`;
    console.log(reelWidth);

    // draw reels area
    ctx.beginPath();
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0, 0, reelWidth * 5, reelWidth * 3);

    // draw reels dividers
    let drawReelWidth = 0;
    var lineWidth = 5;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = lineWidth;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    //let reelWidth = 150;
    for (let i = 0; i < 4; i++) {
        drawReelWidth += reelWidth;
        ctx.beginPath();
        ctx.moveTo(drawReelWidth - lineWidth / 2, 0);
        ctx.lineTo(drawReelWidth - lineWidth / 2, reelWidth * 3);
        ctx.stroke();
    }
}
drawGameReels();

function drawSymbol(symbolImage, positionX, positionY) {
    let newSymbol = new Image();
    newSymbol.onload = function () {
        ctx.drawImage(newSymbol, positionX, positionY, gameParameters.reelWidth * 0.9, gameParameters.reelWidth * 0.9);
        //    ctx.beginPath();
        //    ctx.stroke();
    };
    ctx.globalAlpha = 1;
    newSymbol.src = symbolImage;
}

//drawSymbol('media/symbols/scatter.png', (reelWidth - (reelWidth * 0.9) - lineWidth / 2) / 2, 0);

// let i = 0;
// let interval = setInterval(function() {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     drawGameReels();
//     drawSymbol('media/symbols/scatter.png', 0, i);
//     i++;
// }, 100);

// window.addEventListener('resize', function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawGameReels();
// });