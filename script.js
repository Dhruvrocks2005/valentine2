const messages = [
  "Are you sure, Swara?",
  "Really sure?? 🥺",
  "Think again 💕",
  "Swaraaaa 😭",
  "You’re breaking my heart 💔",
  "I’ll be very sad 😢",
  "Very very sad 😭",
  "Okay fine… 😔",
  "JUST SAY YES 💖"
];

let index = 0;
let yesFontSize = 1.6;

function handleNoClick() {
  const noBtn = document.querySelector(".no-button");
  const yesBtn = document.querySelector(".yes-button");

  noBtn.textContent = messages[index];
  index = (index + 1) % messages.length;

  // REAL growth (layout-aware)
  yesFontSize += 0.35;
  yesBtn.style.fontSize = yesFontSize + "em";
}

function handleYesClick() {
  const music = document.getElementById("bgMusic");

  // Browser-approved autoplay
  music.muted = true;
  music.play().then(() => {
    music.muted = false;
    music.volume = 0.7;
  });

  heartExplosion();

  setTimeout(() => {
    document.getElementById("questionScreen").classList.add("hidden");
    document.getElementById("yesScreen").classList.remove("hidden");
  }, 600);
}

function heartExplosion() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}
