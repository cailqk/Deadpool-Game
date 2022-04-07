const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');
const gameHealth = gameScore.querySelector('.health');

let scene = {
    score: 0,
    enemySpawn: 0,
    activeGame: true,
    health: 100,
}

export {
    scene,
    gamePoints,
    gameHealth
}