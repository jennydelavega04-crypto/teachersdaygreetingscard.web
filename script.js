const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate confetti pieces
const colors = ["#FFD700", "#00FFFF", "#FF69B4", "#32CD32", "#FFA500"];
const confetti = [];

for (let i = 0; i < 100; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    text: Math.random() > 0.8 ? "Smile" : null, // 20% are "Smiling" words
    fontSize: Math.random() * 14 + 12,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    if (c.text) {
      ctx.font = `${c.fontSize}px Poppins`;
      ctx.fillStyle = c.color;
      ctx.fillText(c.text, c.x, c.y);
    } else {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    }

    c.y += c.speed;
    if (c.y > canvas.height + 50) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
