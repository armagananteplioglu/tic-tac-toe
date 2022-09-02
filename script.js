const ticTacToeGame = (() => {
    const cells = document.querySelectorAll(".cells");
    const playerOneScoreBoard = document.querySelector("#playerOneScore");
    const playerTwoScoreBoard = document.querySelector("#playerTwoScore");
    const resetButton = document.querySelector("#clear");
    
    const gameEngine = {
      boardValues: ["", "", "", "", "", "", "", "", ""],
      playerXScore: 0,
      playerOScore: 0,
      turnNo: 0,
      resetButton: () => {
        gameEngine.clearBoard();
        gameEngine.playerXScore = 0;
        playerOneScoreBoard.textContent = gameEngine.playerXScore;
        gameEngine.playerOScore = 0;
        playerTwoScoreBoard.textContent = gameEngine.playerOScore;
        gameEngine.turnNo = 0;
      },
      clearBoard: () => {
        gameEngine.boardValues = ["", "", "", "", "", "", "", "", ""];
        cells.forEach((cell) => {
          cell.textContent = "";
        });
        gameEngine.turnNo = -1;
      },
      cellMarker: (e) => {
        if (e.target.textContent === "") {
          if (gameEngine.turnNo % 2 === 0) {
            e.target.textContent = "X";
            gameEngine.boardValues[e.target.dataset.cellNo] = "X"
            gameEngine.victoryListener()
            gameEngine.turnNo++;
            console.log(gameEngine.turnNo)
          } else {
            e.target.textContent = "O";
            gameEngine.boardValues[e.target.dataset.cellNo] = "O"
            gameEngine.victoryListener()
            gameEngine.turnNo++;
            console.log(gameEngine.turnNo)
          }
        } else return;
      },
      draw: () => {
        alert("It is a draw.")
        gameEngine.clearBoard()
      },
      scoreKeeper: (playerMark) => {
        alert(`Player ${playerMark} wins.`)
        if (playerMark === "X") {
            gameEngine.playerXScore++
            playerOneScoreBoard.textContent = gameEngine.playerXScore
            gameEngine.clearBoard()
        } else {
            gameEngine.playerOScore++
            playerTwoScoreBoard.textContent = gameEngine.playerOScore
            gameEngine.clearBoard()
        }
      },
      victoryListener: () => {
        if (gameEngine.turnNo % 2 === 0) {
          if (
            gameEngine.boardValues[0] === "X" &&
            gameEngine.boardValues[1] === "X" &&
            gameEngine.boardValues[2] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[3] === "X" &&
            gameEngine.boardValues[4] === "X" &&
            gameEngine.boardValues[5] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[6] === "X" &&
            gameEngine.boardValues[7] === "X" &&
            gameEngine.boardValues[8] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[0] === "X" &&
            gameEngine.boardValues[3] === "X" &&
            gameEngine.boardValues[6] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[1] === "X" &&
            gameEngine.boardValues[4] === "X" &&
            gameEngine.boardValues[7] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[2] === "X" &&
            gameEngine.boardValues[5] === "X" &&
            gameEngine.boardValues[8] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[0] === "X" &&
            gameEngine.boardValues[4] === "X" &&
            gameEngine.boardValues[8] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[2] === "X" &&
            gameEngine.boardValues[4] === "X" &&
            gameEngine.boardValues[6] === "X"
          ) {
            gameEngine.scoreKeeper("X");
          }
        } else if (gameEngine.turnNo % 2 === 1){
          if (
            gameEngine.boardValues[0] === "O" &&
            gameEngine.boardValues[1] === "O" &&
            gameEngine.boardValues[2] === "O"
          ) {
            gameEngine.scoreKeeper("O");
          } else if (
            gameEngine.boardValues[3] === "O" &&
            gameEngine.boardValues[4] === "O" &&
            gameEngine.boardValues[5] === "O"
          ) {
            gameEngine.scoreKeeper("O");
          } else if (
            gameEngine.boardValues[6] === "O" &&
            gameEngine.boardValues[7] === "O" &&
            gameEngine.boardValues[8] === "O"
          ) {
            gameEngine.scoreKeeper("O");
          } else if (
            gameEngine.boardValues[0] === "0" &&
            gameEngine.boardValues[3] === "0" &&
            gameEngine.boardValues[6] === "0"
          ) {
            gameEngine.scoreKeeper("O");
          } else if (
            gameEngine.boardValues[1] === "O" &&
            gameEngine.boardValues[4] === "O" &&
            gameEngine.boardValues[7] === "O"
          ) {
            gameEngine.scoreKeeper("O");
          } else if (
            gameEngine.boardValues[2] === "O" &&
            gameEngine.boardValues[5] === "O" &&
            gameEngine.boardValues[8] === "O"
          ) {
            gameEngine.scoreKeeper("X");
          } else if (
            gameEngine.boardValues[0] === "X" &&
            gameEngine.boardValues[4] === "X" &&
            gameEngine.boardValues[8] === "X"
          ) {
            gameEngine.scoreKeeper("O");
          } else if (
            gameEngine.boardValues[2] === "O" &&
            gameEngine.boardValues[4] === "O" &&
            gameEngine.boardValues[6] === "O"
          ) {
            gameEngine.scoreKeeper("O");
          }
        } else {
            if (
                gameEngine.boardValues[0] !== "" &&
                gameEngine.boardValues[1] !== "" &&
                gameEngine.boardValues[2] !== "" &&
                gameEngine.boardValues[3] !== "" &&
                gameEngine.boardValues[4] !== "" &&
                gameEngine.boardValues[5] !== "" &&
                gameEngine.boardValues[6] !== "" &&
                gameEngine.boardValues[7] !== "" &&
                gameEngine.boardValues[8] !== ""
              ) {
                gameEngine.draw();
              }
        }
      }
    };
    
    cells.forEach((cell) => {
      cell.addEventListener("click", gameEngine.cellMarker);
    });
    
    resetButton.addEventListener("click", gameEngine.resetButton);
})()

