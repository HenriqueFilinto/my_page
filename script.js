const audio = document.getElementById('rainOnBrick');
const icon = document.getElementById('icon');

audio.volume = 0.1;

document.body.addEventListener('click', () => {
    if (audio.paused) {
        togglePlay();
    }
}, { once: true });

function togglePlay() {
    if (audio.paused) {
        audio.play();
        icon.innerHTML = "⏸";
    } else {
        audio.pause();
        icon.innerHTML = "▶";
    }
}