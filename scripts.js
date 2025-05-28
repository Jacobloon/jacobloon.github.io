// Follows the mouse
const follower = document.getElementById('mouse-follower');

const offsetX = 0
const offsetY = 25

document.addEventListener('mousemove', (event) => {
    follower.style.left = event.clientX + offsetX + 'px';
    follower.style.top = event.clientY + offsetY + 'px';
});