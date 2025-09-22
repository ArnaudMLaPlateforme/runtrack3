// Fonction asynchrone pour récupérer les utilisateurs et remplir le tableau
async function loadUsers() {
    try {
        const response = await fetch('users.php'); // Récupère le JSON depuis PHP
        const users = await response.json();       // Convertit la réponse en tableau JS

        const tbody = document.querySelector('#usersTable tbody');
        tbody.innerHTML = ''; // Vide le tableau avant de remplir

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
