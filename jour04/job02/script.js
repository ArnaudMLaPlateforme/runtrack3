// Fonction qui prend une chaîne JSON et une clé
function jsonValueKey(jsonString, key) {
  // Transformation de la chaîne JSON en objet JavaScript
  const obj = JSON.parse(jsonString);

  // Retourne la valeur associée à la clé
  return obj[key];
}

// Exemple d'utilisation
const jsonStr = `{
  "name": "La Plateforme_",
  "address": "8 rue d'hozier",
  "city": "Marseille",
  "nb_staff": "11",
  "creation": "2019"
}`;

console.log(jsonValueKey(jsonStr, "city"));     // Affiche : Marseille
console.log(jsonValueKey(jsonStr, "name"));     // Affiche : La Plateforme_
console.log(jsonValueKey(jsonStr, "nb_staff")); // Affiche : 11

