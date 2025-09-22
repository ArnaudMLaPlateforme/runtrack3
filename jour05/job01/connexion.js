// Sélectionner le formulaire et les champs
let form = document.getElementById("form-connexion");

let email = document.getElementById("email");
let emailError = document.getElementById("email-error");

let password = document.getElementById("password");
let passwordError = document.getElementById("password-error");

// Fonctions de validation 

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
    return value.length >= 6; 
}

// Vérification en direct sur chaque champ
email.addEventListener("input", function() {
    if (!validateEmail(email.value)) {
        emailError.textContent = "Email invalide";
    } else {
        emailError.textContent = "";
    }
});

password.addEventListener("input", function() {
    if (!validatePassword(password.value)) {
        passwordError.textContent = "Mot de passe trop court";
    } else {
        passwordError.textContent = "";
    }
});

// Empêcher le submit si un champ est invalide
form.addEventListener("submit", function(e) {
    if (!validateEmail(email.value) || !validatePassword(password.value)) {
        e.preventDefault();
        alert("Veuillez corriger les erreurs avant de soumettre !");
    }
});
