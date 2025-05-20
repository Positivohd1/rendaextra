// Animação 3D card ao mover o mouse sobre ele

const card = document.querySelector('.card3d');

card.addEventListener('mousemove', e => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // posição do mouse no card
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10; // máximo 10 graus
  const rotateY = ((x - centerX) / centerX) * 10;

  card.querySelector('.inner-card').style.transform =
    `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.querySelector('.inner-card').style.transform = 'rotateX(0) rotateY(0)';
});
