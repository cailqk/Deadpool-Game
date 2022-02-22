//creating elements
const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score');
const wizard = document.createElement('div');

wizard.classList.add('wizard');
wizard.style.top = '200px';
wizard.style.left = '200px';

let keys = {};

//key listeners for movement of the wizard 
document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);
startScreen.addEventListener('click', (e) => {
    e.currentTarget.classList.add('hidden');
    playScreen.classList.remove('hidden');
    gameScore.classList.remove('hidden');
})

//setting function to 
function onKeyDown(e) {
    keys[e.code] = true;
    console.log(keys);
}
function onKeyUp(e) {
    keys[e.code] = false;
    console.log(keys);
}




playScreen.appendChild(wizard);
