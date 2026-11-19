const audio = document.getElementById('rainOnBrick');
const icon = document.getElementById('icon');
const btnPlay = document.getElementById('btnPlay');
const video = document.getElementById('bg-video');

video.playbackRate = 0.7;
audio.volume = 0.1;

// Music only starts from the player button (no hijacked first click).
btnPlay.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.textContent = '⏸';
        btnPlay.setAttribute('aria-label', 'Pausar música');
    } else {
        audio.pause();
        icon.textContent = '▶';
        btnPlay.setAttribute('aria-label', 'Tocar música');
    }
});
