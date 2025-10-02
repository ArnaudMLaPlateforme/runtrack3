// Prenez ce logo de La Plateforme_ et réalisez un jeu du taquin :

// Tableau des images et d'une case vide pour le puzzle
const images = [
  "1.PNG", "2.PNG", "3.PNG",
  "4.PNG", "5.PNG", "6.PNG",
  "7.PNG", "8.PNG", "empty" // case vide
];

// Tableau représentant l'état actuel du plateau
let board = [];

// Fonction pour mélanger aléatoirement un tableau
function shuffle(array) {
  // La méthode sort() avec Math.random() - 0.5 retourne un ordre aléatoire
  return array.sort(() => Math.random() - 0.5);
}

// Fonction pour initialiser le plateau de jeu
function initBoard() {
  $("#board").empty();        // Vide le plateau
  $("#message").text("");      // Efface le message de victoire
  $("#restartBtn").hide();     // Cache le bouton de redémarrage

  // Mélange les images et copie le tableau
  board = shuffle([...images]);

  // Crée le plateau en ajoutant les images et la case vide
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "empty") {
      $("#board").append(`<div class="tile empty" data-index="${i}"></div>`); // case vide
    } else {
      $("#board").append(`<img src="${board[i]}" class="tile" data-index="${i}">`); // image
    }
  }

  // Ajoute l'événement click sur chaque tuile
  $(".tile").click(moveTile);
}

// Fonction pour déplacer une tuile
function moveTile() {
  let index = parseInt($(this).data("index"));   // Index de la tuile cliquée
  let emptyIndex = board.indexOf("empty");       // Index de la case vide

  let validMoves = [];

  // Vérifie si le mouvement est valide et ajoute l'index à validMoves
  // Déplacement à gauche
  if (emptyIndex % 3 !== 2 && emptyIndex + 1 === index) validMoves.push(index);
  // Déplacement à droite
  if (emptyIndex % 3 !== 0 && emptyIndex - 1 === index) validMoves.push(index);
  // Déplacement vers le haut
  if (emptyIndex + 3 === index) validMoves.push(index);
  // Déplacement vers le bas
  if (emptyIndex - 3 === index) validMoves.push(index);

  // Si le mouvement est valide, échange les positions et réaffiche le plateau
  if (validMoves.includes(index)) {
    [board[index], board[emptyIndex]] = [board[emptyIndex], board[index]];
    renderBoard();
    checkWin(); // Vérifie si le joueur a gagné
  }
}

// Fonction pour afficher le plateau selon l'état actuel
function renderBoard() {
  $("#board").empty(); // Vide le plateau

  // Parcourt le tableau board et ajoute les éléments au DOM
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "empty") {
      $("#board").append(`<div class="tile empty" data-index="${i}"></div>`); // case vide
    } else {
      $("#board").append(`<img src="${board[i]}" class="tile" data-index="${i}">`); // image
    }
  }

  // Réattache l'événement click sur chaque tuile
  $(".tile").click(moveTile);
}

// Fonction pour vérifier si le plateau est dans l'ordre correct
function checkWin() {
  const solved = [
    "1.PNG", "2.PNG", "3.PNG",
    "4.PNG", "5.PNG", "6.PNG",
    "7.PNG", "8.PNG", "empty"
  ];

  // Compare le tableau actuel avec le tableau résolu
  if (JSON.stringify(board) === JSON.stringify(solved)) {
    $("#message").text("Vous avez gagné !").css("color", "green"); // Message de victoire
    $(".tile").off("click"); // Désactive les clics sur les tuiles
    $("#restartBtn").show(); // Affiche le bouton de redémarrage
  }
}

// Bouton pour redémarrer le jeu
$("#restartBtn").click(initBoard);

// Initialisation du plateau lorsque le DOM est prêt
$(document).ready(initBoard);
