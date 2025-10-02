// Créez un <button> ayant comme id “button”. Créez un fichier expression.txt contenant
// votre expression favorite.
// Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le contenu du
// fichier expression.txt, placez le dans un paragraphe <p> et insérez le dans le corps de
// votre page.


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
