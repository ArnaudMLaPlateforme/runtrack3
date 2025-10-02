// Créez une base de données “utilisateurs” contenant une table “utilisateurs” et ayant
// comme champs “id”, “nom”, “prenom” et “email”.
// Ajoutez des utilisateurs directement dans phpmyadmin.

// Fonction asynchrone pour récupérer les utilisateurs et remplir le tableau
async function loadUsers() {
    try {
        const response = await fetch('users.php'); // Récupère le JSON depuis PHP
        const users = await response.json();       // Convertit la réponse en tableau JS

        const tbody = document.querySelector('#usersTable tbody');
        tbody.innerHTML = ''; // Vide le tableau avant de remplir

        // Parcourt chaque utilisateur du tableau récupéré
        users.forEach(function (user) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
}

// Événement sur le bouton "update"
document.getElementById('update').addEventListener('click', function () {
    loadUsers();
});

// Charger les utilisateurs automatiquement au chargement de la page
window.addEventListener('load', loadUsers);
