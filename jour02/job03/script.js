function addone(){

    // Récupèrer l’élément <p> avec l’ID "compteur"
    const countElement = document.getElementById("compteur");

    // Lire la valeur numérique actuelle dans ce <p> et convertir en entier
    const count = parseInt(countElement.textContent, 10);

    // Incrémenter cette valeur de 1
    const newCount = count + 1;

    // Met à jour le contenu du <p> avec la nouvelle valeur
    countElement.textContent = newCount;    
}

document.getElementById("button").addEventListener("click", addone);