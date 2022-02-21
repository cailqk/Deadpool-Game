const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score')

startScreen.addEventListener('click', (e) => {
    e.currentTarget.classList.add('hidden');
    playScreen.classList.remove('hidden');
    gameScore.classList.remove('hidden');

})

