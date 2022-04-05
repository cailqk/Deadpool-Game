//creating elements
debugger
const gameScreen = document.querySelector('.game-screen');
const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score');
const wizard = document.createElement('div');
const nameHolder = document.querySelector('.name');
// const backgroundStart = document.querySelector('.background-image-start-screen');


wizard.classList.add('wizard');
wizard.style.top = '200px';
wizard.style.left = '200px';

let keys = {};
let player = {
    x: 100,
    y: 150
};
let game = {
    speed: 3,
};

//key listeners for movement of the wizard 
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

startScreen.addEventListener('click', () => {
    if (nameHolder.value !== '') {
        gameScreen.classList.add('hidden');
        playScreen.classList.remove('hidden');
        gameScore.classList.remove('hidden');

    } else {
        window.alert('Please write your name!');
        return;
    }

    //defining the wizard coordinates
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';

    //infinite loop 
    window.requestAnimationFrame(gameLoop)

})

//setting function to 
function onKeyDown(e) {
    keys[e.code] = true;

}
function onKeyUp(e) {
    keys[e.code] = false;

}

//creating the game loop
function gameLoop() {



    if (keys.ArrowUp) {
        player.y -= game.speed;
    }
    if (keys.ArrowDown) {
        player.y += game.speed;
    }
    if (keys.ArrowLeft) {
        player.x -= game.speed;
    }
    if (keys.ArrowRight) {
        player.x += game.speed;
    }
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    //infinite loop 
    window.requestAnimationFrame(gameLoop)
}



playScreen.appendChild(wizard);
