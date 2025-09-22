<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des utilisateurs</title>
    <style>
        table {
            border-collapse: collapse;
            width: 80%;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f0f0f0;
        }
        button {
            margin-top: 20px;
            padding: 8px 16px;
        }
    </style>
</head>
<body>

<h1>Liste des utilisateurs</h1>

<button id="update">Update</button>

<table id="usersTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <!-- Les utilisateurs seront ajoutés ici -->
    </tbody>
</table>

<!-- Inclusion du fichier JavaScript séparé -->
<script src="script.js"></script>

</body>
</html>
