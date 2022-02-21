const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');

startScreen.addEventListener('click', (e) => {
    e.currentTarget.classList.add('hidden');
    playScreen.classList.remove('hidden');
})

