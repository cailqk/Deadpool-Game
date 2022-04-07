import { scene } from './score.js'
let screen = document.querySelector('.play-screen');
let totalScore = document.querySelector('.total-score');
let totalKills = document.querySelector('.total-kills')

export function gameOverScreen (score, kills) {
    let gameOver = document.querySelector('.game-over');
    scene.activeGame = false;
    gameOver.classList.remove('hidden');
    screen.classList.add('blur')

    totalScore.textContent = scene.score;
    totalKills.textContent = kills;


    console.log(score, kills);
}