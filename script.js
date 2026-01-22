let audioUnlocked = false;

const messages = [
  "Are you sure, Swara?",
  "Really really sure? 🥺",
  "Think once more 💗",
  "That hurts 😢",
  "I'm getting sad 😔",
  "Very sad 😭",
  "PLEASE SAY YES 💖"
];

let msgIndex = 0;
let yesSize = 1.8;
let yesPadding = 16;

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

function noClick() {
  unlockAudio(); // 🔑 unlocks audio safely

  const noBtn = document.querySelector(".no");
  const yesBtn = document.querySelector(".yes");

  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  yesSize += 1.2;
  yesPadding += 14;

  yesBtn.style.fontSize = yesSize + "em";
  yesBtn.style.padding = yesPadding + "px " + (yesPadding * 1.6) + "px";

  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 250);
}

function yesClick() {
  unlockAudio();

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});

  heartAndConfettiExplosion();

  setTimeout(() => {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("yesScreen").classList.remove("hidden");
  }, 600);
}

function heartAndConfettiExplosion() {
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
