const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, Swara, say yes please! ❤️"
];

let messageIndex = 0;
const music = document.getElementById("bgMusic");

function handleNoClick() {
  const noBtn = document.querySelector(".no-button");
  const yesBtn = document.querySelector(".yes-button");

  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size * 1.15 + "px";
}

function handleYesClick() {
  music.volume = 0.7;
  music.play(); // ✅ USER GESTURE → WORKS ON GITHUB

  heartExplosion();

  setTimeout(() => {
    document.getElementById("questionPage").classList.add("hidden");
    document.getElementById("yesPage").classList.remove("hidden");
  }, 600);
}

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.getElementById("heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);

/* 💥 HEART EXPLOSION */
function heartExplosion() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "24px";
    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 150;

    heart.animate([
      { transform: "translate(-50%, -50%)", opacity: 1 },
      {
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
        opacity: 0
      }
    ], { duration: 800 });

    setTimeout(() => heart.remove(), 800);
  }
}
