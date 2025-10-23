const introSong = document.getElementById('introSong');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    introSong.volume = 0.2;
    introSong.play();

    let fadeDuration = 10; // seconds
    let fadeStep = introSong.volume / (fadeDuration * 20);

    let fadeInterval = setInterval(() => {
        if(introSong.volume > 0){
            introSong.volume -= fadeStep;
        } else {
            introSong.volume = 0;
            clearInterval(fadeInterval);
        }
    }, 50);
});
