// Fonction qui ajoute la lettre dans le textarea
function addLetter(event) {

    // Extraire la touche pressée depuis event
    const key = event.key;

    // Vérifier si c’est une lettre (a-z)
    if (/[a-z]/.test(key)) {
        const textarea = document.getElementById("keylogger");

        // Vérifier si le textarea a le focus
        const isFocused = document.activeElement === textarea;

        // Ajouter 1 ou 2 fois la lettre selon le focus
        if (isFocused) {
            event.preventDefault();
            textarea.value = textarea.value + key + key; // double ajout
        } else {
            textarea.value = textarea.value + key; // simple ajout
        }
        
    }
}

// Ajouter l'écouteur de frappe clavier
document.addEventListener("keydown", addLetter);
