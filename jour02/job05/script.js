const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  // Calculer le pourcentage de scroll vertical
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min(scrollTop / docHeight, 1);

  // Convertir le % en couleur (du rouge vers vert)
  // Variation de la couleur du rouge (255,0,0) vers vert (0,255,0)
  const red = Math.floor(255 * (1 - scrollPercent));
  const green = Math.floor(255 * scrollPercent);

  footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
});
