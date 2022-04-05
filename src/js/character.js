const character = document.createElement('div');

let keys = {};

let game = {
    speed: 3,
    movingMultiplier: 3
};

let player = {
    x: 100,
    y: 150
};

function onKeyDown(e) {
// debugger
    keys[e.key] = true;
    gameLoop()

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

    if (keys.ArrowUp) {
        player.y -= game.speed * game.movingMultiplier;
    }
    if (keys.ArrowDown) {
        player.y += game.speed * game.movingMultiplier;
    }
    if (keys.ArrowLeft) {
        player.x -= game.speed * game.movingMultiplier;
    }
    if (keys.ArrowRight) {
        player.x += game.speed * game.movingMultiplier;
    }

    character.style.top = player.y + 'px';
    character.style.left = player.x + 'px';

}


export {
    hero,
    gameLoop,
    onKeyDown,
    onKeyUp,
}
