const yes = document.getElementById("yes");
const no = document.getElementById("no");
const menu = document.getElementById("menu");
const music = document.getElementById("music");

// NO button fuge
no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button
yes.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  menu.classList.remove("hidden");  // meniul apare centrat
  music.play();
  launchConfetti();
});

// Afișare secțiune
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* CONFETTI */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length: 150}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dy: Math.random() * 3 + 1
  }));

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = "#ff4d6d";
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }
  animate();
}
