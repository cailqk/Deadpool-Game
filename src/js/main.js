//creating elements
const startScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');
const gameScore = document.querySelector('.game-score');
const wizard = document.createElement('div');

wizard.classList.add('wizard');
wizard.style.top = '200px';
wizard.style.left = '200px';

let keys = {};
let player = {};
let game = {};

//key listeners for movement of the wizard 
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
startScreen.addEventListener('click', (e) => {
    e.currentTarget.classList.add('hidden');
    playScreen.classList.remove('hidden');
    gameScore.classList.remove('hidden');

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
   if(keys.ArrowUp) {
 
   }
   if(keys.ArrowDown) {

   }
   if(keys.ArrowLeft) {

   }
   if(keys.ArrowRight) {

   }
    window.requestAnimationFrame(gameLoop)
}



playScreen.appendChild(wizard);
