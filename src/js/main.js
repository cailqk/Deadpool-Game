//creating elements
const gameScreen = document.querySelector('.game-screen');
const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score');
const nameHolder = document.querySelector('.name');

import * as player from './character.js';

//key listeners for movement of the wizard 


startScreen.addEventListener('click', () => {
    if (nameHolder.value !== '') {
        gameScreen.classList.add('hidden');
        playScreen.classList.remove('hidden');
        gameScore.classList.remove('hidden');
        document.addEventListener('keydown', (e) => player.onKeyDown(e));
        document.addEventListener('keyup',(e) => player.onKeyUp(e));

    } else {
        window.alert('Please write your name!');
        return;
    }
})

window.requestAnimationFrame(player.gameLoop)
playScreen.appendChild(player.hero());
