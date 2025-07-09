// 1. Lorsqu'une touche est pressée sur le clavier :
//    → Appeler la fonction checkKonamiCode(event)

// 2. Dans la fonction checkKonamiCode :

//    a. Récupérer le code de la touche pressée (event.keyCode)

//    b. Vérifier si ce code correspond à la prochaine touche attendue dans la séquence "konamiCode"
//       - Si oui :
//          i. Avancer à l’étape suivante du code (incrémenter position)
//          ii. Si on arrive à la fin de la séquence (position == longueur du code Konami) :
//              → Appeler la fonction activateSecretPage()
//              → Réinitialiser position à 0
//       - Si non :
//          → Réinitialiser position à 0

// 3. Fonction activateSecretPage :

//    a. Cacher l’élément avec l’ID "home" (page par défaut)
//    b. Afficher l’élément avec l’ID "secretPage" (page cachée)

// 4. Initialiser un écouteur global sur le clavier :
//    → Sur chaque pression de touche, exécuter checkKonamiCode()


// Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let position = 0;

// Fonction de vérification du code Konami
function checkKonamiCode(event) {
  if (event.keyCode === konamiCode[position]) {
    position++;
    if (position === konamiCode.length) {
      activateSecretPage();
      position = 0;
    }
  } else {
    position = 0;
  }
}

// Fonction à exécuter si le code Konami est détecté
function activateSecretPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("secretPage").style.display = "block";
}

// Écouteur de touches clavier
window.addEventListener("keydown", checkKonamiCode);
