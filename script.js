let turn = true; //true means X turn
let squares = [];
function reset(i, j, k, q, w, e, r, t, y) {
  setTimeout(function () {
    location.reload();
  }, 1000);
}
function checkWinner() {
  for (var i = 1; i <= 9; i++) {
    squares[i] = document.getElementById("A" + i).innerHTML;
  }
  // check horizontal
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    alert("player " + squares[1] + " Wins the game");
    document.getElementById("A" + 1).style.color = "red";
    document.getElementById("A" + 2).style.color = "red";
    document.getElementById("A" + 3).style.color = "red";
    document.getElementById("A" + 4).style.color = "#3a3c3e";
    document.getElementById("A" + 5).style.color = "#3a3c3e";
    document.getElementById("A" + 6).style.color = "#3a3c3e";
    document.getElementById("A" + 7).style.color = "#3a3c3e";
    document.getElementById("A" + 8).style.color = "#3a3c3e";
    document.getElementById("A" + 9).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    alert("player " + squares[4] + " Wins the game");
    document.getElementById("A" + 4).style.color = "red";
    document.getElementById("A" + 5).style.color = "red";
    document.getElementById("A" + 6).style.color = "red";
    document.getElementById("A" + 1).style.color = "#3a3c3e";
    document.getElementById("A" + 2).style.color = "#3a3c3e";
    document.getElementById("A" + 3).style.color = "#3a3c3e";
    document.getElementById("A" + 7).style.color = "#3a3c3e";
    document.getElementById("A" + 8).style.color = "#3a3c3e";
    document.getElementById("A" + 9).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    alert("player " + squares[7] + " Wins the game");
    document.getElementById("A" + 7).style.color = "red";
    document.getElementById("A" + 8).style.color = "red";
    document.getElementById("A" + 9).style.color = "red";
    document.getElementById("A" + 4).style.color = "#3a3c3e";
    document.getElementById("A" + 5).style.color = "#3a3c3e";
    document.getElementById("A" + 6).style.color = "#3a3c3e";
    document.getElementById("A" + 1).style.color = "#3a3c3e";
    document.getElementById("A" + 2).style.color = "#3a3c3e";
    document.getElementById("A" + 3).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }

  //check vertical
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    alert("player " + squares[1] + " Wins the game");
    document.getElementById("A" + 1).style.color = "red";
    document.getElementById("A" + 4).style.color = "red";
    document.getElementById("A" + 7).style.color = "red";
    document.getElementById("A" + 2).style.color = "#3a3c3e";
    document.getElementById("A" + 3).style.color = "#3a3c3e";
    document.getElementById("A" + 5).style.color = "#3a3c3e";
    document.getElementById("A" + 6).style.color = "#3a3c3e";
    document.getElementById("A" + 8).style.color = "#3a3c3e";
    document.getElementById("A" + 9).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    alert("player " + squares[2] + " Wins the game");
    document.getElementById("A" + 2).style.color = "red";
    document.getElementById("A" + 5).style.color = "red";
    document.getElementById("A" + 8).style.color = "red";
    document.getElementById("A" + 1).style.color = "#3a3c3e";
    document.getElementById("A" + 3).style.color = "#3a3c3e";
    document.getElementById("A" + 4).style.color = "#3a3c3e";
    document.getElementById("A" + 6).style.color = "#3a3c3e";
    document.getElementById("A" + 7).style.color = "#3a3c3e";
    document.getElementById("A" + 9).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    alert("player " + squares[3] + " Wins the game");
    document.getElementById("A" + 3).style.color = "red";
    document.getElementById("A" + 6).style.color = "red";
    document.getElementById("A" + 9).style.color = "red";
    document.getElementById("A" + 1).style.color = "#3a3c3e";
    document.getElementById("A" + 2).style.color = "#3a3c3e";
    document.getElementById("A" + 4).style.color = "#3a3c3e";
    document.getElementById("A" + 5).style.color = "#3a3c3e";
    document.getElementById("A" + 7).style.color = "#3a3c3e";
    document.getElementById("A" + 8).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }

  //check diagonal
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    alert("player " + squares[1] + " Wins the game");
    document.getElementById("A" + 1).style.color = "red";
    document.getElementById("A" + 5).style.color = "red";
    document.getElementById("A" + 9).style.color = "red";
    document.getElementById("A" + 2).style.color = "#3a3c3e";
    document.getElementById("A" + 3).style.color = "#3a3c3e";
    document.getElementById("A" + 4).style.color = "#3a3c3e";
    document.getElementById("A" + 6).style.color = "#3a3c3e";
    document.getElementById("A" + 7).style.color = "#3a3c3e";
    document.getElementById("A" + 8).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    alert("player " + squares[3] + " Wins the game");
    document.getElementById("A" + 3).style.color = "red";
    document.getElementById("A" + 5).style.color = "red";
    document.getElementById("A" + 7).style.color = "red";
    document.getElementById("A" + 1).style.color = "#3a3c3e";
    document.getElementById("A" + 2).style.color = "#3a3c3e";
    document.getElementById("A" + 4).style.color = "#3a3c3e";
    document.getElementById("A" + 6).style.color = "#3a3c3e";
    document.getElementById("A" + 8).style.color = "#3a3c3e";
    document.getElementById("A" + 9).style.color = "#3a3c3e";
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
}

function insert(id) {
  let S = document.getElementById(id);
  if (turn && S.innerHTML == "") {
    S.innerHTML = "X";
    turn = !turn;
  } else if (!turn && S.innerHTML == "") {
    S.style.color = "#1ed86c";
    S.innerHTML = "O";
    turn = !turn;
  } else if (S.innerHTML != "") {
  } else {
    alert("No Player Wins");
    reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  checkWinner();
}
document.getElementById("demo").onclick = function () {
  myFunction();
};
function myFunction() {
  reset(1, 2, 3, 4, 5, 6, 7, 8, 9);
  document.getElementById(h2).innerHTML = "it's X turn";
}
