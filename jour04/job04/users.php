
<?php
$conn = new mysqli("localhost", "root", "root", "utilisateurs");

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM utilisateurs");

$utilisateurs = [];
while ($row = $result->fetch_assoc()) {
    $utilisateurs[] = $row;
}

echo json_encode($utilisateurs);

?>