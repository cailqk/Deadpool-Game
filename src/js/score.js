const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');
const gameHealth = gameScore.querySelector('.health');

let scene = {
    score: 0,
    enemySpawn: 0,
    activeGame: true,
    health: 100,
}

 const killBonus = (killCounter) => {
    if(killCounter >= 10) {
        score.gameHealth.textContent = score.scene.health + 20;
        if(score.gameHealth.textContent >= 100) {
            score.gameHealth.textContent = 100;
        }
        killCounter = 0;
        }
}

export {
    scene,
    gamePoints,
    gameHealth, 
    killBonus
}