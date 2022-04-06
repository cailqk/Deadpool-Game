//creating elements
const gameScreen = document.querySelector('.game-screen');
const startButton = document.querySelector('.start-button');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score');

const nameHolder = document.querySelector('.name');

import * as play from './character.js';

//key listeners for movement of the wizard 


startButton.addEventListener('click', () => {
    if (nameHolder.value !== '') {
        gameScreen.classList.add('hidden');
        playScreen.classList.remove('hidden');
        playScreen.appendChild(play.hero());
        gameScore.classList.remove('hidden');
        document.addEventListener('keydown', (e) => play.onKeyDown(e));
        document.addEventListener('keyup',(e) => play.onKeyUp(e));
        window.requestAnimationFrame(play.gameLoop)

    } else {
        window.alert('Please write your name!');
        return;
    }
})


