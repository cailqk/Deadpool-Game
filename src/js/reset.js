import { scene } from "./score.js";
import * as hero from "./character.js"

export function reset () {

    scene.score = 0;
    scene.enemySpawn = 0;
    scene.activeGame = true;
    scene.health = 100;
    scene.kills = 0;

    let scoreEl = document.querySelector('.game-score');
    let healthEl = document.querySelector('.health');
    scoreEl.textContent = 0;
    healthEl.textContent = 100;

    let gameOver = document.querySelector('.game-over');
    let screen = document.querySelector('.play-screen');
    gameOver.classList.add('hidden');
    screen.classList.remove('blur');

    hero.character.style.top = 150 + 'px';
    hero.character.style.left = 100 + 'px';

}
