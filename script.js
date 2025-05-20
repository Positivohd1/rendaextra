/* Reset básico */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(135deg, #111, #1a1a1a);
  color: #fff;
  overflow-x: hidden;
}

header {
  text-align: center;
  padding: 3rem 1rem;
  background: #ff0055;
  color: #fff;
  box-shadow: 0 0 20px #ff0055;
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
}

header p {
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.card3d {
  perspective: 1000px;
  margin-bottom: 3rem;
}

.inner-card {
  background: #222;
  border-radius: 20px;
  padding: 2rem;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 0 30px #ff0055aa;
}

.card3d:hover .inner-card {
  transform: rotateY(10deg) rotateX(5deg);
}

h2 {
  font-weight: 800;
  color: #ff0055;
  margin-top: 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
}

ul li {
  margin: 0.5rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding-left: 1.5rem;
}

ul li::before {
  content: "✔";
  color: #00ff99;
  position: absolute;
  left: 0;
  top: 0;
}

.cta {
  text-align: center;
  margin-top: 2rem;
}

.cta a {
  display: inline-block;
  background: #00ff99;
  color: #000;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 0 20px #00ff9988;
  transition: transform 0.2s ease;
}

.cta a:hover {
  transform: scale(1.1);
}

/* Depoimentos */

.depoimentos {
  background: #111;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 30px #00ff9955;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  user-select: none;
}

.depoimentos h2 {
  color: #00ff99;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.depoimentos-carousel {
  overflow: hidden;
  position: relative;
  height: 180px;
}

.depoimento {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #eee;
  font-style: italic;
  padding: 0 1rem;
  height: 180px;
  box-sizing: border-box;
}

.depoimento.active {
  display: flex;
  animation: fadeInDepo 0.8s ease forwards;
}

@keyframes fadeInDepo {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.depoimento img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #00ff9977;
}

.depoimento footer {
  margin-top: 0.5rem;
  font-weight: 700;
  color: #00ff99;
}

.depoimentos-controls {
  margin-top: 1rem;
}

.depoimentos-controls button {
  background: #00ff99;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 15px #00ff9988;
  transition: background 0.3s ease;
}

.depoimentos-controls button:hover {
  background: #00ff66;
}

footer {
  text-align: center;
  padding: 2rem;
  color: #888;
  font-size: 0.9rem;
  user-select: none;
}
