let progress = 0;
const fill = document.getElementById("progressFill");
const text = document.getElementById("progressText");
const bonusMsg = document.getElementById("bonusMsg");

function updateProgress(amount) {
  progress = Math.min(progress + amount, 100);
  fill.style.width = `${progress}%`;
  text.textContent = `${progress}% completo`;
}

document.getElementById("ctaBtn").addEventListener("click", () => {
  updateProgress(50);
});

// Ao rolar até o final, mostra bônus
window.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 30) {
    bonusMsg.style.display = "block";
    updateProgress(50);
  }
});
