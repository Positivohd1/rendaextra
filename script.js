const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const progress = document.getElementById("progress");

// Atualiza a barra de progresso com base nas missões
function updateProgress() {
  const total = [m1, m2, m3];
  const done = total.filter(m => m.checked).length;
  const percent = (done / total.length) * 100;
  progress.style.width = percent + "%";
}

[m1, m2, m3].forEach(missao => {
  missao.addEventListener("change", updateProgress);
});

window.addEventListener("scroll", () => {
  const depo = document.getElementById("depoimentos").getBoundingClientRect();
  if (depo.top < window.innerHeight) {
    m2.checked = true;
    updateProgress();
  }
});

document.getElementById("ctaBtn").addEventListener("click", () => {
  m3.checked = true;
  updateProgress();
});
