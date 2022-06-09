let screen = document.querySelector('.play-screen');

function newEnemy() {
    
    let newEnemyEl = document.createElement('div');
    newEnemyEl.classList.add('new-enemy');
    newEnemyEl.x = window.innerWidth - 160;
    newEnemyEl.style.left = newEnemyEl.x + 'px';
    newEnemyEl.style.top = (window.innerHeight - 200) * Math.random() + 'px';
    screen.appendChild(newEnemyEl)
}

export {
    newEnemy
}