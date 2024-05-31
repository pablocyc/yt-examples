const beep = new Audio("sounds/beep.mp3");
const muted = document.querySelector(".mute input");
const radar = document.querySelector(".radar");

const addDot = () => {
  if (Math.random() > 0.5) return;
  const dot = document.createElement("div");
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 10) + 10;

  dot.classList.add("dot");
  dot.style.setProperty("--x", `${x}%`);
  dot.style.setProperty("--y", `${y}%`);
  dot.style.setProperty("--size", `${size}px`);
  radar.appendChild(dot);
  setTimeout(() => radar.removeChild(dot), 2500);
}

const playBeep = () => {
  if (!muted.checked) {
    beep.currentTime = 0;
    beep.play();
  }
}

setInterval(() => {
  playBeep();
  addDot();
}, 1250);
