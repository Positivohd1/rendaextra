// Anima leve movimentação 3D conforme cursor
const cards = document.querySelectorAll('.card-3d img');
cards.forEach(c => {
  c.parentElement.addEventListener('mousemove', e => {
    const rect = c.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    c.style.transform = `rotateY(${x/20}deg) rotateX(${-y/20}deg)`;
  });
  c.parentElement.addEventListener('mouseleave', () => {
    c.style.transform = '';
  });
});
