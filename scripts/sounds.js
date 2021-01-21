function playBackgroundSound() {
    let audio;
    audio = new Audio('./media/sounds/background-sound.mov');
    audio.play();
}

window.addEventListener('click', function() {
    // playBackgroundSound();
});