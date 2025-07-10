const konamiCode = [
  "arrowup", "arrowup", "arrowdown", "arrowdown",
  "arrowleft", "arrowright", "arrowleft", "arrowright",
  "b", "a"
];
let position = 0;

function checkKonamiCode(event) {
  if (event.key.toLowerCase() === konamiCode[position]) {
    position++;
    if (position === konamiCode.length) {
      activateSecretPage();
      position = 0;
    }
  } else {
    position = 0;
  }
}

function activateSecretPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("secretPage").style.display = "block";
}

window.addEventListener("keydown", checkKonamiCode);






// // Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A
// const konamiCode = [
//   "arrowup", "arrowup", "arrowdown", "arrowdown",
//   "arrowleft", "arrowright", "arrowleft", "arrowright",
//   "b", "a"
// ];
// let position = 0;

// // Fonction de vérification du code Konami
// function checkKonamiCode(event) {

//   /* Si la touche pressée (event.keyCode) correspond à la position du code Konami, on avance la position 
//   pour vérifier la prochaine touche */
//   if (event.key === konamiCode[position]) {
//     position++;

//     /* Si la position atteint la longueur de la séquence, 
//     cela signifie que toute la séquence a été tapée correctement */
//     if (position === konamiCode.length) {
//       activateSecretPage();
//       position = 0;
//     }
//   } else {
//     position = 0;
//   }
// }

// // Fonction à exécuter si le code Konami est détecté
// function activateSecretPage() {
//   document.getElementById("home").style.display = "none";
//   document.getElementById("secretPage").style.display = "block";
// }

// // Écouteur de touches clavier
// window.addEventListener("keydown", checkKonamiCode);
