export function collision(firstEl, secondEl) {
    let first = firstEl.getBoundingClientRect();
    let second = secondEl.getBoundingClientRect();

    return !(first.top > second.bottom ||
             first.bottom < second.top ||
             first.right < second.left ||
             first.left > second.right)
};