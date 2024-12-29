const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size, size);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -3, 3, -3, 3, 0);
    ctx.bezierCurveTo(3, 3, 0, 6, 0, 8);
    ctx.bezierCurveTo(0, 6, -3, 3, -3, 0);
    ctx.bezierCurveTo(-3, -3, 0, -3, 0, 0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

let hearts = [];

function createHeart() {
    const x = Math.random() * canvas.width;
    const y = canvas.height + 50;
    const size = Math.random() * 0.5 + 0.3;
    const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
    const speed = Math.random() * 2 + 1;
    hearts.push({ x, y, size, color, speed });
}

function updateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        heart.y -= heart.speed;
        drawHeart(heart.x, heart.y, heart.size, heart.color);
        if (heart.y + 8 * heart.size < 0) {
            hearts.splice(index, 1);
        }
    });
}

function animate() {
    updateHearts();
    requestAnimationFrame(animate);
}

setInterval(createHeart, 200);
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});