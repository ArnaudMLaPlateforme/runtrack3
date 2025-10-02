// Konami

// Définition du "Konami Code" simplifié (flèche haut deux fois)
const konamiCode = [
  "arrowup", "arrowup"
];

// Variable pour suivre la position actuelle dans le code
let position = 0;

// Fonction qui vérifie si la touche pressée correspond à la prochaine touche du code
function checkKonamiCode(event) {
  // On compare la touche pressée (en minuscules) avec la touche attendue
  if (event.key.toLowerCase() === konamiCode[position]) {
    // La touche est correcte, on passe à la suivante
    position++;
    
    // Si on a atteint la fin du code, on active la page secrète
    if (position === konamiCode.length) {
      activateSecretPage(); // Affiche la page secrète
      position = 0; // Réinitialise la position pour permettre un nouveau code
    }
  } else {
    // Touche incorrecte, on réinitialise la position
    position = 0;
  }
}

// Fonction qui affiche la page secrète et cache la page principale
function activateSecretPage() {
  document.getElementById("home").style.display = "none"; // Masque la page principale
  document.getElementById("secretPage").style.display = "block"; // Affiche la page secrète
}

// Écouteur d'événement sur tout le document pour détecter les touches pressées
window.addEventListener("keydown", checkKonamiCode);
