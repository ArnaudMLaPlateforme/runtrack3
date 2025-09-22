// Sélectionner le formulaire et les champs
let form = document.getElementById("form-inscription");

let nom = document.getElementById("nom");
let nomError = document.getElementById("nom-error");

let prenom = document.getElementById("prenom");
let prenomError = document.getElementById("prenom-error");

let email = document.getElementById("email");
let emailError = document.getElementById("email-error");

let password = document.getElementById("password");
let passwordError = document.getElementById("password-error");

let adresse = document.getElementById("adresse");
let adresseError = document.getElementById("adresse-error");

let codepostal = document.getElementById("codepostal");
let codepostalError = document.getElementById("codepostal-error");

// Fonctions de validation 
function validateNom(value) {
    return value.trim() !== "";
}

function validatePrenom(value) {
    return value.trim() !== "";
}

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
    return value.length >= 6; 
}

function validateAdresse(value) {
    return value.trim() !== "";
}

function validateCodePostal(value) {
    return /^\d{5}$/.test(value);
}

// Vérification en direct sur chaque champ
nom.addEventListener("input", function() {
    if (!validateNom(nom.value)) {
        nomError.textContent = "Nom requis";
    } else {
        nomError.textContent = "";
    }
});

prenom.addEventListener("input", function() {
    if (!validatePrenom(prenom.value)) {
        prenomError.textContent = "Prénom requis";
    } else {
        prenomError.textContent = "";
    }
});

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

adresse.addEventListener("input", function() {
    if (!validateAdresse(adresse.value)) {
        adresseError.textContent = "Adresse requise";
    } else {
        adresseError.textContent = "";
    }
});

codepostal.addEventListener("input", function() {
    if (!validateCodePostal(codepostal.value)) {
        codepostalError.textContent = "Code postal invalide";
    } else {
        codepostalError.textContent = "";
    }
});

// Empêcher le submit si un champ est invalide
form.addEventListener("submit", function(e) {
    if (!validateNom(nom.value) || !validatePrenom(prenom.value) || !validateEmail(email.value) ||
        !validatePassword(password.value) || !validateAdresse(adresse.value) || !validateCodePostal(codepostal.value)) {
        e.preventDefault();
        alert("Veuillez corriger les erreurs avant de soumettre !");
    }
});
