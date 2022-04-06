import * as score from './score.js';

const character = document.createElement('div');
const playArea = document.querySelector('.play-screen');

let keys = {};

let game = {
    speed: 8,
};

let player = {
    x: 100,
    y: 150,
    width: 0,
    height: 0
};

// player.width = character.clientWidth;
// player.height = character.clientHeight;

function onKeyDown(e) {
    keys[e.key] = true;
    
}
function onKeyUp(e) {
    keys[e.key] = false;
   
}

function hero() {

    character.classList.add('wizard');
    character.style.top = player.y + 'px'
    character.style.left = player.x + 'px'
    return character;
}

//creating the game loop
function gameLoop() {

    //gravity
    let inAir = (player.y + character.clientHeight) <= playArea.clientHeight
    if(inAir) {
        player.y += game.speed
    } 

    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * 2;
    }
    if (keys.ArrowDown && inAir) {
        player.y += game.speed;
        if(player.y > window.innerHeight - character.clientHeight) {
            player.y = window.innerHeight - character.clientHeight
        }
    }
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed;
    }
    if (keys.ArrowRight) {
        player.x += game.speed;
        if(player.x > window.innerWidth - character.clientWidth) {
            player.x = window.innerWidth - character.clientWidth;
        }
    }

    character.style.top = player.y + 'px';
    character.style.left = player.x + 'px';

    score.scene.score ++;
    score.gamePoints.textContent = (score.scene.score / 10).toFixed(0);
    requestAnimationFrame(gameLoop)
}


export {
    hero,
    gameLoop,
    onKeyDown,
    onKeyUp,
}
