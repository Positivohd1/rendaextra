// Carrossel de depoimentos

const depoimentos = document.querySelectorAll('.depoimento');
const prevBtn = document.getElementById('prevDepo');
const nextBtn = document.getElementById('nextDepo');
let currentIndex = 0;

function showDepo(index) {
  depoimentos.forEach((depo, i) => {
   
