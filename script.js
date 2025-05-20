const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const bonus = document.getElementById("bonus");

// Marca missão 2 quando depoimentos entram na tela
window.addEventListener("scroll", () => {
  const depo = document.getElementById("depoimentos").getBoundingClientRect();
  if (depo.top < window.innerHeight) {
    m2.checked = true;
    checarMissoes();
  }
});

// Marca missão 3 ao clicar no botão
document.getElementById("ctaBtn").addEventListener("click", () => {
  m3.checked = true;
  checarMissoes();
});

function checarMissoes() {
  if (m1.checked && m2.checked && m3.checked) {
    bonus.style.display = "block";
  }
}
