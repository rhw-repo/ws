(function () {
  const X_CLASS = "x";
  const CIRCLE_CLASS = "circle";

  const cellElements = document.querySelectorAll("[data-cell]");
  const board = document.getElementById("board");
  const winningMessageTextElement = document.querySelector(
    "[data-winning-message-text]",
  );
  const winningMessageElement = document.getElementById("winningMessage");

  const form = document.getElementById("player-form");
  const restartButton = document.getElementById("restartButton");

  const players = {
    x: "Player 1",
    o: "Player 2",
  };

  let circleTurn;
  function getNames(e) {
    e.preventDefault();

    const formData = new FormData(form);
    players.x = formData.get("player-one-name");
    players.o = formData.get("player-two-name");
    startGame();
  }

  function clearBoard() {
    cellElements.forEach((cell) => {
      cell.classList.remove(X_CLASS);
      cell.classList.remove(CIRCLE_CLASS);
      cell.removeEventListener("click", handleClick);
    });
    winningMessageElement.classList.remove("show");
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
  }

  function resetApp() {
    form.reset();
    players.x = "Player 1";
    players.o = "Player 2";
    clearBoard();
  }

  function startGame() {
    circleTurn = false;

    cellElements.forEach((cell) => {
      cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHoverClass();
    /* console.log(players.x);
    console.log(players.o); */
  }

  function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);

    switch (true) {
      case checkWin(currentClass):
        endGame(false);
        break;

      case isDraw():
        endGame(true);
        break;

      default:
        swapTurns();
        setBoardHoverClass();
    }
  }

  function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = "Draw!";
    } else {
      winningMessageTextElement.innerText = `${circleTurn ? players.o : players.x} Wins!`;
    }
    winningMessageElement.classList.add("show");
  }

  function isDraw() {
    // Destructure cellElements into an array using spread operator
    // Must be array to use the contains method
    return [...cellElements].every((cell) => {
      return (
        cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
      );
    });
    // winningMessageElement.classList.add("show");
  }

  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
  }

  function swapTurns() {
    circleTurn = !circleTurn;
  }

  function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
      board.classList.add(CIRCLE_CLASS);
    } else {
      board.classList.add(X_CLASS);
    }
  }

  // If every single cell inside at least one of the combinations
  // has our currentClass then it's a win
  // Check if any of the combinations present
  function checkWin(currentClass) {
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return WINNING_COMBINATIONS.some((combination) => {
      // Check that every element has the same class
      // Get the index then return the cell index of each cell
      // Allows check of the precise cell in combo for currentClass
      return combination.every((index) => {
        return cellElements[index].classList.contains(currentClass);
      });
    });
  }
      form.addEventListener("submit", getNames);
      restartButton.addEventListener("click", resetApp);


})();


