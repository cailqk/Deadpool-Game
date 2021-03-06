import { reset } from './reset.js';
import { scene } from './score.js';
let screen = document.querySelector('.play-screen');
let totalScore = document.querySelector('.total-score');
let totalKills = document.querySelector('.total-kills');


export function gameOverScreen (score, kills) {
    let gameOver = document.querySelector('.game-over');
    scene.activeGame = false;
    gameOver.classList.remove('hidden');
    screen.classList.add('blur')

    totalScore.textContent = (score / 10).toFixed(0);
    totalKills.textContent = kills;
}