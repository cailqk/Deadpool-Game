import * as score from './score.js';
import { fire } from './fire.js';
import { enemy } from './enemy.js';
import { collision } from './collision.js';
import { gameOverScreen } from './gameOver.js';

export const character = document.createElement('div');
const playArea = document.querySelector('.play-screen');

let killCounter = 0;
let totalKills = 0;


let keys = {};

let game = {
    speed: 4,
    fireInterval: 500,
    enemyInterval: 1000
};

export let player = {
    x: 100,
    y: 150,
    width: 0,
    height: 0,
    lastTimeFire: 0
};

function onKeyDown(e) {
    keys[e.key] = true;
}
function onKeyUp(e) {
    keys[e.key] = false;

}

function hero() {

    character.classList.add('deadpool');
    character.style.top = player.y + 'px'
    character.style.left = player.x + 'px'
    return character;
}

//creating the game loop
function gameLoop(timestamp) {

    //gravity
    let inAir = (player.y + character.clientHeight) <= playArea.clientHeight
    if (inAir) {
        player.y += game.speed / 2;
    }

    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * 2;
    }
    if (keys.ArrowDown && inAir) {
        player.y += game.speed;
        if (player.y > window.innerHeight - character.clientHeight) {
            player.y = window.innerHeight - character.clientHeight
        }
    }
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed;
    }
    if (keys.ArrowRight) {
        player.x += game.speed;
        if (player.x > window.innerWidth - character.clientWidth) {
            player.x = window.innerWidth - character.clientWidth;
        }
    }

    character.style.top = player.y + 'px';
    character.style.left = player.x + 'px';


    if (keys[" "] && timestamp - player.lastTimeFire > game.fireInterval) {
        character.classList.add('fire');
        setTimeout(() => {
            character.classList.remove('fire');
        }, 500)
        fire(player)
        player.lastTimeFire = timestamp


    }


    let fireBalls = document.querySelectorAll('.fire-ball');
    fireBalls.forEach(ball => {
        ball.x += game.speed * 2;
        ball.style.left = ball.x + 'px';

        if (ball.x > window.innerWidth - ball.clientWidth) {
            ball.parentElement.removeChild(ball)
        }
    })

    if (timestamp - score.scene.enemySpawn > game.enemyInterval + 1000 * Math.random()) {
        enemy()
        score.scene.enemySpawn = timestamp;
    }
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(current => {
        current.x -= game.speed;
        current.style.left = current.x + 'px';

        if (current.x + current.clientWidth <= 0) {
            current.parentElement.removeChild(current)
        }
    })

    enemies.forEach(current => {

        if (collision(character, current)) {
            // gameOverScreen(score.scene.score, totalKills)
            killCounter++;
            totalKills++;
            score.scene.kills++;
            score.scene.score += 10;
            score.kills.textContent = score.scene.kills;

            current.parentElement.removeChild(current)
            score.gameHealth.textContent = score.scene.health -= 10;
            if (killCounter == 10) {
                score.scene.health += 20;
                if (score.scene.health >= 100) {
                    score.scene.health = 100;
                }
                score.gameHealth.textContent = score.scene.health;

                killCounter = 0;
            }

            if (score.gameHealth.textContent <= 0) {
                gameOverScreen(score.scene.score, totalKills)

            }
        }
        fireBalls.forEach(ball => {

            if (collision(ball, current)) {
                current.parentElement.removeChild(current);
                ball.parentElement.removeChild(ball);
                killCounter++;
                totalKills++;
                score.scene.kills++;
                score.kills.textContent = score.scene.kills;
                if (killCounter == 10) {
                    score.scene.health += 20;
                    if (score.scene.health >= 100) {
                        score.scene.health = 100;
                    }
                    score.gameHealth.textContent = score.scene.health;

                    killCounter = 0;
                }

                score.scene.score += 100;
            }
        })
    })

    score.scene.score++;
    score.gamePoints.textContent = (score.scene.score / 10).toFixed(0)
    if (score.scene.activeGame) {
        requestAnimationFrame(gameLoop)
    }
}


export {
    hero,
    gameLoop,
    onKeyDown,
    onKeyUp,
}
