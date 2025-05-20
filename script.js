// Referências às missões e progresso
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const progress = document.getElementById('progress');
const card = document.getElementById('missionCard');
const ctaBtn = document.getElementById('ctaBtn');

// Atualiza barra e gira o card 3D
function updateProgress() {
  const doneCount = [m1, m2].filter(c => c.checked).length;
  const percent = (doneCount / 2) * 100;
  progress.style.width = percent + '%';
  if (doneCount === 2) {
    card.classList.add('flipped');
  }
}

// Eventos para cada missão
[m1, m2].forEach(chk => chk.addEventListener('change', updateProgress));

// Marca missão 2 ao clicar no CTA
ctaBtn.addEventListener('click', () => {
  m2.checked = true;
  updateProgress();
});
