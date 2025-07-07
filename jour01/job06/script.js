function fizzbuzz() {

    // Boucle pour afficher les nombres de 1 à 151
    for (let index = 1; index < 152; index++) {
        
        if (index % 3 === 0 && index % 5 === 0) { // Nombres multiples de 3 et 5
            console.log("FizzBuzz");
        } else if (index % 5 === 0) { // Nombres multiples de 5
            console.log("Buzz");
        }
        else if (index % 3 === 0) { // Nombres multiples de 3
            console.log("Fizz");
        }
        else {
            console.log(index);
        }
    }
}

fizzbuzz();