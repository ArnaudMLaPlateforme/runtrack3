<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Filtrer Pokémon</title>
</head>

<body>

  <h1>Filtrer les Pokémon</h1>

  <!-- Formulaire de filtre -->
  <form id="pokemonForm">
    <label for="id">ID:</label>
    <input type="text" id="id">

    <label for="nom">Nom:</label>
    <input type="text" id="nom">

    <label for="type">Type:</label>
    <select id="type">
      <option value="">-- Tous --</option>
      <option value="Bug">Bug</option>
      <option value="Poison">Poison</option>
      <option value="Grass">Grass</option>
      <option value="Fire">Fire</option>
      <option value="Flying">Flying</option>
    </select>

    <input type="button" id="filtrer" value="Filtrer">
  </form>

  <div id="result"></div>

  <script src="script.js"></script>
</body>

</html>