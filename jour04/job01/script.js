// Fonction asynchrone pour récupérer le fichier
async function getText(file) {
  let myObject = await fetch(file);    // Récupère le fichier
  let myText = await myObject.text();  // Lit le contenu en texte
  showEx(myText);                      // Affiche le texte dans la page
}

// Affiche le texte dans <p id="output">
function showEx(text) {
  document.getElementById("output").textContent = text;
}

// Au clic sur le bouton, on récupère et affiche le fichier
document.getElementById("button").addEventListener("click", function () {
  getText("expression.txt");
});
