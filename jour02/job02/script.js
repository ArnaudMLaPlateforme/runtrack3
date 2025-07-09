// Fonction pour gérer l'apparition et la disparition du texte
function showhide(){ 
    // Récupération de l'élément ayant l'ID "citation" (s'il existe déjà dans le DOM)
    const article = document.getElementById("citation"); 

    // Est-ce que article existe ?
    if (article) { 
        // Si oui, suppression de article du DOM
        article.remove(); 
    } else {

        // Création d'un nouvel élément "article"
        const newArticle = document.createElement("article"); 

        newArticle.id = "citation"; 

        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

        // Ajout de newArticle dans le body
        document.body.appendChild(newArticle); 
    }
}

document.getElementById("button").addEventListener("click", showhide);