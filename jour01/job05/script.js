function afficherjourssemaines() {

    // Tableau contenant les jours de la semaine
    const jourssemaines = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
    ];

    // Boucle for pour afficher tous les jours de la semaine
    for (let index = 0; index < jourssemaines.length; index++) {
        console.log(jourssemaines[index]);

    }
}

// Appel de la fonction 
afficherjourssemaines();