// Fonction pour savoir si un nombre est un nombre premier
function estPremier(nombre) {
    if (nombre <= 1) { // les nombres <= 1 ne sont pas premiers
        return false; 
    }

    // On essaye de diviser le nombre par tous les nombres de 2 jusqu'à nombre - 1
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false; // si le nombre est divisible par un autre, ce n'est pas un nombre premier
        }
    }

    return true; // si on n'a trouvé aucun diviseur, c'est un nombre premier
}

// Fonction qui additionne a et b si a et b sont des nombres premiers
function sommeNombresPremiers (a, b){
    if (estPremier(a) && estPremier(b)) { // Vérification si a et b sont des nombre premiers en appelant la fonction estPremier
        return a + b;
    }
    else{
        return false;
    }
}

// Tests
console.log(sommeNombresPremiers(3, 5));  // 8 (3 et 5 sont premiers)
console.log(sommeNombresPremiers(4, 5));  // false (4 n'est pas premier)
console.log(sommeNombresPremiers(11, 7)); // 18 (11 et 7 sont premiers)
console.log(sommeNombresPremiers(1, 2));  // false (1 n'est pas premier)


