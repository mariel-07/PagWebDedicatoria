// Corazones animados
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
let W, H;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

resize();
window.onresize = resize;

const hearts = [];
const heartImg = new Image();
heartImg.src = "IMAGEN/red-heartf.png"; // Asegúrate de que esta imagen esté en la raíz

function Heart() {
  this.x = Math.random() * W;
  this.y = Math.random() * H - H;
  this.size = 15 + Math.random() * 10;
  this.speed = 1 + Math.random() * 2;
  this.alpha = 0.7 + Math.random() * 0.3;
}

Heart.prototype.draw = function () {
  ctx.globalAlpha = this.alpha;
  ctx.drawImage(heartImg, this.x, this.y, this.size, this.size);
  ctx.globalAlpha = 1;
};

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < hearts.length; i++) {
    let h = hearts[i];
    h.y += h.speed;
    if (h.y > H) hearts[i] = new Heart();
    h.draw();
  }
  requestAnimationFrame(draw);
}

// Iniciar animación una vez que la imagen cargue
heartImg.onload = function() {
  for (let i = 0; i < 30; i++) {
    hearts.push(new Heart());
  }
  draw();
};