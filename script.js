// Carrossel de depoimentos

const depoimentos = document.querySelectorAll('.depoimento');
const prevBtn = document.getElementById('prevDepo');
const nextBtn = document.getElementById('nextDepo');
let currentIndex = 0;

function showDepo(index) {
  depoimentos.forEach((depo, i) => {
    depo.classList.toggle('active', i === index);
  });
}

function nextDepo() {
  currentIndex = (currentIndex + 1) % depoimentos.length;
  showDepo(currentIndex);
}

function prevDepo() {
  currentIndex = (currentIndex - 1 + depoimentos.length) % depoimentos.length;
  showDepo(currentIndex);
}

nextBtn.addEventListener('click', nextDepo);
prevBtn.addEventListener('click', prevDepo);

// Auto play a cada 6 segundos
setInterval(nextDepo, 6000);

// Mostrar o primeiro depoimento ao carregar
showDepo(currentIndex);
