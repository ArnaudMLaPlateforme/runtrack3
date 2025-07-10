function jourtravaille(date) {
    // Tableau des jours fériés en 2020 (format "YYYY-M-D")
    const joursFeries2020 = [
        "2020-1-1",
        "2020-4-13",
        "2020-5-1",
        "2020-5-8",
        "2020-5-21",
        "2020-6-1",
        "2020-7-14",
        "2020-8-15",
        "2020-11-1",
        "2020-11-11",
        "2020-12-25"
    ];

    // Récupération du jour, du mois et de l'année de la date passée en paramètre
    const jour = date.getDate();           
    const mois = date.getMonth() + 1;      
    const annee = date.getFullYear();      

    // Construction d'une chaîne qui représente la date passée en paramètre au format "YYYY-MM-DD"
    const dateStr = `${annee}-${mois}-${jour}`;

    // Vérification si la date est dans le tableau joursFeries2020
    if (joursFeries2020.includes(dateStr)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    } 
    // Vérification si le jour est dimanche ou samedi
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    } 
    else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}


// Exemple d'appels à la fonction
jourtravaille(new Date("2020-5-1")); // Jour férié
jourtravaille(new Date("2020-5-2")); // Week-end
jourtravaille(new Date("2020-5-4")); // Jour travaillé