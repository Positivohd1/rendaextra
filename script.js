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

// Eventos
nextBtn.addEventListener('click', nextDepo);
prevBtn.addEventListener('click', prevDepo);

// Mostrar primeiro depoimento ao carregar
showDepo(currentIndex);
