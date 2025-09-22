const images = [
  "1.PNG", "2.PNG", "3.PNG",
    "4.PNG", "5.PNG", "6.PNG",
    "7.PNG", "8.PNG", "empty" // case vide
];

let board = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initBoard() {
  $("#board").empty();
  $("#message").text("");
  $("#restartBtn").hide();

  board = shuffle([...images]);

  for (let i = 0; i < board.length; i++) {
    if (board[i] === "empty") {
      $("#board").append(`<div class="tile empty" data-index="${i}"></div>`);
    } else {
      $("#board").append(`<img src="${board[i]}" class="tile" data-index="${i}">`);
    }
  }

  $(".tile").click(moveTile);
}

function moveTile() {
  let index = parseInt($(this).data("index"));
  let emptyIndex = board.indexOf("empty");

  let validMoves = [];
  // gauche
  if (emptyIndex % 3 !== 2 && emptyIndex + 1 === index) validMoves.push(index);
  // droite
  if (emptyIndex % 3 !== 0 && emptyIndex - 1 === index) validMoves.push(index);
  // haut
  if (emptyIndex + 3 === index) validMoves.push(index);
  // bas
  if (emptyIndex - 3 === index) validMoves.push(index);

  if (validMoves.includes(index)) {
    [board[index], board[emptyIndex]] = [board[emptyIndex], board[index]];
    renderBoard();
    checkWin();
  }
}

function renderBoard() {
  $("#board").empty();
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "empty") {
      $("#board").append(`<div class="tile empty" data-index="${i}"></div>`);
    } else {
      $("#board").append(`<img src="${board[i]}" class="tile" data-index="${i}">`);
    }
  }
  $(".tile").click(moveTile);
}

function checkWin() {
  const solved = [
    "1.PNG", "2.PNG", "3.PNG",
    "4.PNG", "5.PNG", "6.PNG",
    "7.PNG", "8.PNG", "empty"
  ];

  if (JSON.stringify(board) === JSON.stringify(solved)) {
    $("#message").text("Vous avez gagné !").css("color", "green");
    $(".tile").off("click"); // bloque la partie
    $("#restartBtn").show();
  }
}

$("#restartBtn").click(initBoard);

// Initialisation
$(document).ready(initBoard);
