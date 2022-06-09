let screen = document.querySelector('.play-screen');

function enemy() {
    
    let enemyEl = document.createElement('div');
    enemyEl.classList.add('enemy');
    enemyEl.x = window.innerWidth - 160;
    enemyEl.style.left = enemyEl.x + 'px';
    enemyEl.style.top = (window.innerHeight - 230) * Math.random() + 'px';
    screen.appendChild(enemyEl)
}

export {
    enemy
}