// Sélection du formulaire et des champs de saisie
let form = document.getElementById("form-connexion"); // Formulaire de connexion

let email = document.getElementById("email");         // Champ email
let emailError = document.getElementById("email-error"); // Zone d'affichage d'erreur pour l'email

let password = document.getElementById("password");       // Champ mot de passe
let passwordError = document.getElementById("password-error"); // Zone d'affichage d'erreur pour le mot de passe

// Fonctions de validation des champs

// Valide si l'email correspond au format standard (ex: xxx@xxx.com)
function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Valide si le mot de passe a au moins 6 caractères
function validatePassword(value) {
    return value.length >= 6; 
}

// Vérification en direct de l'email à chaque saisie
email.addEventListener("input", function() {
    if (!validateEmail(email.value)) {
        // Affiche un message d'erreur si l'email est invalide
        emailError.textContent = "Email invalide";
    } else {
        // Efface le message d'erreur si l'email est valide
        emailError.textContent = "";
    }
});

// Vérification en direct du mot de passe à chaque saisie
password.addEventListener("input", function() {
    if (!validatePassword(password.value)) {
        // Affiche un message d'erreur si le mot de passe est trop court
        passwordError.textContent = "Mot de passe trop court";
    } else {
        // Efface le message d'erreur si le mot de passe est valide
        passwordError.textContent = "";
    }
});

// Empêche l'envoi du formulaire si un champ est invalide
form.addEventListener("submit", function(e) {
    if (!validateEmail(email.value) || !validatePassword(password.value)) {
        e.preventDefault(); // Bloque l'envoi du formulaire
        alert("Veuillez corriger les erreurs avant de soumettre !"); // Message d'alerte
    }
});
