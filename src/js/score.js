const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');
const gameHealth = gameScore.querySelector('.health');
const kills = gameScore.querySelector('.kills');

let scene = {
    score: 0,
    enemySpawn: 0,
    activeGame: true,
    health: 100,
    kills: 0
}

export {
    scene,
    gamePoints,
    gameHealth,
    kills
}