function tri (numbers, order){
    // Vérifie si l'ordre demandé est "asc" (ascendant / croissant)
    if (order === "asc") { 
        // Utilisation de la méthode sort() avec une fonction de comparaison pour trier du plus petit au plus grand
        numbers.sort(function(a,b){
            return a-b;
        })
    } else if (order === "desc") { // Tri décroissant
        numbers.sort(function(a,b){
            return b-a;
        })
    } 
    return numbers;
}

console.log(tri([1, 2, 3, 4, 5, 6], "asc"));
console.log(tri([1, 2, 3, 4, 5, 6], "desc"));
