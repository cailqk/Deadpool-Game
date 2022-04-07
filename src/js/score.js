const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');

let scene = {
    score: 0,
    enemySpawn: 0
}

export {
    scene,
    gamePoints,
}