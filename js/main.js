let playerScore = 0;
let compScore = 0;

const playRock = () => play("✊");
const playPaper = () => play("🖐");
const playScissors = () => play("✌");

document.getElementById("rock").onclick = playRock;
document.getElementById("paper").onclick = playPaper;
document.getElementById("scissors").onclick = playScissors;
document.getElementById("reset").onclick = resetGame;

function getCompChoice() {
  const choices = ["✊", "🖐", "✌"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(userPlay) {
  const compChoice = getCompChoice();
  document.getElementById("result").innerHTML = `YOU: 🧠${userPlay}   ${compChoice}💻 :COMPUTER`;

  if (userPlay == "✊") {
    if (compChoice == "✊") {
      document.getElementById("winner").innerHTML = "It's a tie! 😮";
    } else if (compChoice == "🖐") {
      document.getElementById("winner").innerHTML = "Computer wins! 😞";
      compScore++;
    } else if (compChoice == "✌") {
      document.getElementById("winner").innerHTML = "You win! 😀";
      playerScore++;
    }
  } else if (userPlay == "🖐") {
    if (compChoice == "🖐") {
      document.getElementById("winner").innerHTML = "It's a tie! 😮";
    } else if (compChoice == "✊") {
      document.getElementById("winner").innerHTML = "You win! 😀";
      playerScore++;
    } else if (compChoice == "✌") {
      document.getElementById("winner").innerHTML = "Computer wins! 😞";
      compScore++;
    }
  } else if (userPlay == "✌") {
    if (compChoice == "✌") {
      document.getElementById("winner").innerHTML = "It's a tie! 😮";
    } else if (compChoice == "✊") {
      document.getElementById("winner").innerHTML = "Computer wins! 😞";
      compScore++;
    } else if (compChoice == "🖐") {
      document.getElementById("winner").innerHTML = "You win! 😀";
      playerScore++;
    }
  }

  gameVictory();
  gameOver();
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("compScore").innerHTML = compScore;
}

function resetGame() {
  playerScore = 0;
  compScore = 0;
  document.querySelector("#gamebox").className = "gamebox";
  document.getElementById("result").innerHTML = "";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("compScore").innerHTML = compScore;
  document.getElementById("rock").onclick = playRock;
  document.getElementById("paper").onclick = playPaper;
  document.getElementById("scissors").onclick = playScissors;
}

function gameVictory() {
  document.getElementById("playerScore").value = playerScore;

  if (playerScore !== 5) {
    return;
  }
  indicarVictoria();
  document.querySelector("#gamebox").className = "gameVictory";
  document.getElementById("rock").onclick = "";
  document.getElementById("paper").onclick = "";
  document.getElementById("scissors").onclick = "";
}

function gameOver() {
  document.getElementById("compScore").value = compScore;

  if (compScore !== 5) {
    return;
  }
  indicarFracaso();
  document.querySelector("#gamebox").className = "gameOver";
  document.getElementById("rock").onclick = "";
  document.getElementById("paper").onclick = "";
  document.getElementById("scissors").onclick = "";
}

function indicarFracaso() {
  Swal.fire({
    icon: "error",
    title: "Oops!",
    html: `
        <p class="h4">You lost the game 👎</p>
        <span><input type="button" value="Reset" class="btn btn-outline-danger"
                    onclick="window.location.reload(false)"></span>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
  });
}

function indicarVictoria() {
  Swal.fire({
    icon: "success",
    title: "Congratulations!",
    html: `
        <p class="h4">You won the game 👍</p>
        <span><input type="button" value="Reset" class="btn btn-outline-danger"
                    onclick="window.location.reload(false)"></span>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
  });
}
