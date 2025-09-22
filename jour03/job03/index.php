<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Taquin - La Plateforme_</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }

    #board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 2px;
      width: max-content;
      margin: 20px auto;
      border: 2px solid #333;
    }

    .tile {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }

    .empty {
      background: #eee;
    }

    #message {
      font-weight: bold;
      margin-top: 20px;
    }

    #restartBtn {
      display: none;
      margin-top: 10px;
      padding: 8px 15px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <h1>Jeu du taquin - La Plateforme_</h1>
  <div id="board"></div>
  <div id="message"></div>
  <button id="restartBtn">Recommencer</button>

  <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
  <script src="script.js"></script>
</body>

</html>
