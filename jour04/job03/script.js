// Fonction asynchrone qui récupère le JSON, filtre les Pokémon et affiche les résultats
async function filterPokemons() {
  // Récupération des valeurs saisies par l'utilisateur dans le formulaire
  const idValue = document.getElementById("id").value;               
  const nomValue = document.getElementById("nom").value.toLowerCase(); 
  const typeValue = document.getElementById("type").value;           

  try {
    // Récupération du fichier JSON contenant tous les Pokémon
    const response = await fetch("pokemon.json");  // Requête HTTP pour récupérer le fichier
    const data = await response.json();            // Transforme la réponse JSON en tableau d'objets JavaScript

    // Filtrage des Pokémon selon les critères saisis
    const filtered = data.filter(function(pokemon) {
      // Vérifie si l'ID correspond (ou si le champ est vide)
      const matchId = idValue === "" || pokemon.id.toString() === idValue;

      // Vérifie si le nom français contient la valeur saisie 
      const matchNom = nomValue === "" || pokemon.name.french.toLowerCase().includes(nomValue);

      // Vérifie si le type sélectionné est dans le tableau des types du Pokémon
      const matchType = typeValue === "" || pokemon.type.includes(typeValue);

      // Retourne true uniquement si toutes les conditions sont respectées
      return matchId && matchNom && matchType;
    });

    // Affichage des résultats
    const resultDiv = document.getElementById("result"); // Sélection du conteneur pour les résultats
    resultDiv.innerHTML = ""; // Vide les résultats précédents

    if(filtered.length === 0){
      // Si aucun Pokémon ne correspond aux critères, on affiche un message
      resultDiv.textContent = "Aucun Pokémon ne correspond aux critères.";
    } else {
      // Sinon, on parcourt tous les Pokémon filtrés
      filtered.forEach(function(pokemon){
        const div = document.createElement("div"); // Création d'une div pour chaque Pokémon
        div.className = "pokemon";                 

        // Texte contenant ID, nom français et types
        let content = `#${pokemon.id} - ${pokemon.name.french} - Types: ${pokemon.type.join(", ")}`;

        // Ajout des statistiques de base (HP, Attaque, Défense, etc.)
        content = content + `\nStats : HP:${pokemon.base.HP}, Attack:${pokemon.base.Attack}, Defense:${pokemon.base.Defense}, Sp. Attack:${pokemon.base["Sp. Attack"]}, Sp. Defense:${pokemon.base["Sp. Defense"]}, Speed:${pokemon.base.Speed}`;

        // Ajout du texte dans la div
        div.textContent = content;

        // Ajout de la div au conteneur principal des résultats
        resultDiv.appendChild(div);
      });
    }
  } catch (error) {
    // Gestion des erreurs : affiche l'erreur dans la console si le fetch échoue
    console.error("Erreur lors du fetch :", error);
  }
}

// Ajout d'un écouteur d'événement sur le bouton "filtrer"
// Lorsque l'utilisateur clique sur le bouton, on appelle la fonction filterPokemons
document.getElementById("filtrer").addEventListener("click", function() {
  filterPokemons();
});
