let screen = document.querySelector('.play-screen');


function fire(player) {
    let fireBall = document.createElement('div');

    fireBall.classList.add('fire-ball')
    fireBall.style.top = (player.y + player.height + 40) + 'px';
    fireBall.x = player.x + player.width + 110;
    fireBall.style.left = player.x + 400 + 'px';

    screen.appendChild(fireBall)
}

export {
    fire
}