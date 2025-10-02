// Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px.
// Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas
// de votre fenêtre.
// De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en
// fonction du pourcentage de scrolling.

const footer = document.querySelector("footer");

// Ecouteur d’événement sur la fenêtre (window)
window.addEventListener("scroll", () => {

  // Récupère le nombre de pixels déjà défilés vers le bas
  const scrollTop = window.scrollY;
  // Hauteur totale de la page (tout le contenu) - Hauteur visible de l'écran (fenêtre)
  const docHeight = document.body.scrollHeight - window.innerHeight;

  // Pourcentage du scroll entre 0 et 1
  const percent = scrollTop / docHeight;

  // Mélange du rouge vers le vert
  const red = 255 - (255 * percent);
  const green = 255 * percent;

  // Appliquer la couleur au footer
  footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
});
