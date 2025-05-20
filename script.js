const missao1 = document.getElementById('missao1');
const missao2 = document.getElementById('missao2');
const missao3 = document.getElementById('missao3');
const bonus = document.getElementById('bonus');

function checarMissoes() {
  if (missao1.checked && missao2.checked && missao3.checked) {
    bonus.style.display = 'block';
  }
}

missao1.addEventListener('change', checarMissoes);
missao2.addEventListener('change', checarMissoes);
missao3.addEventListener('change', checarMissoes);

// Marca a missão 2 quando depoimentos entram em foco
const depoimentos = document.getElementById('depoimentos');
window.addEventListener('scroll', () => {
  const rect = depoimentos.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    missao2.checked = true;
    checarMissoes();
  }
});

// Marca a missão 3 ao clicar no botão
const ctaBtn = document.getElementById('ctaBtn');
ctaBtn.addEventListener('click', () => {
  missao3.checked = true;
  checarMissoes();
});
