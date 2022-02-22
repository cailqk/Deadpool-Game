const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score');
const wizard = document.createElement('div');

wizard.classList.add('wizard');
wizard.style.top = '200px';
wizard.style.left = '200px';


startScreen.addEventListener('click', (e) => {
    e.currentTarget.classList.add('hidden');
    playScreen.classList.remove('hidden');
    gameScore.classList.remove('hidden');

})

playScreen.appendChild(wizard);
