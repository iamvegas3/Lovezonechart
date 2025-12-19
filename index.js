const loveMessages = [
  "💖 Your love energy is glowing!",
  "💜 Someone is thinking about you right now",
  "✨ Love vibes are strong today",
  "🔥 Neon passion detected!",
  "🌙 A sweet connection is coming soon"
];

const button = document.getElementById("checkLoveBtn");
const statusText = document.getElementById("statusText");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  statusText.textContent = loveMessages[randomIndex];
});
