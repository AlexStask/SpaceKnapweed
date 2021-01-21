const showCurrentTime = () => {
    let currentTime = new Date();
    let hour = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
    let minute = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
    document.querySelector('#time').innerText = `${hour}:${minute}`;
}

setInterval(showCurrentTime, 1000);

let spinButton = document.querySelector('.spin-button');

spinButton.addEventListener('click', function () {
    drawGameReels();
    displayNewSpinSymbols();
})