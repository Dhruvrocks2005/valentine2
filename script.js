let audioUnlocked = false;
let msgIndex = 0;

const messages = [
  "Are you sure, Swara?",
  "Really sure?? 🥺",
  "Think again 💗",
  "That hurts 😢",
  "I'm getting sad 😔",
  "Very sad 😭",
  "PLEASE SAY YES 💖"
];

function unlockAudio() {
  if (audioUnlocked) return;

  const music = document.getElementById("bgMusic");
  music.muted = true;

  music.play().then(() => {
    music.pause();
    music.currentTime = 0;
    music.muted = false;
    audioUnlocked = true;
  }).catch(() => {});
}

function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function noClick() {
  unlockAudio();
  vibrate([40, 30, 40]); // 📳 Android vibration

  const noBtn = document.querySelector(".no");
  const yesBtn = document.querySelector(".yes");

  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  let scale = yesBtn.dataset.scale
    ? parseFloat(yesBtn.dataset.scale)
    : 1;

  scale += 0.45; // 🔥 FAST growth
  yesBtn.dataset.scale = scale;
  yesBtn.style.transform = `scale(${scale})`;

  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 200);
}

function yesClick() {
  unlockAudio();
  vibrate([80, 40, 80]); // 💖 longer vibration

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});

  explode();

  setTimeout(() => {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("yesScreen").classList.remove("hidden");
  }, 600);
}

function explode() {
  const emojis = ["💖", "💘", "💝", "🎉", "🎊"];

  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.className = Math.random() > 0.5 ? "heart" : "confetti";
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = 20 + Math.random() * 20 + "px";
    el.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}
