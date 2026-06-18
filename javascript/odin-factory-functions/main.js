// Check script has loaded first!
console.log("main.js loaded");
// IIFE function - RUNS
// (capture input, pass to =>) call factory function (to assign them to any render)
(() => {
   const createPlayer = () => {
    const playerOne = document.getElementById("player-one").value;
    const playerTwo = document.getElementById("player-two").value;
    console.log(playerOne);
    console.log(playerTwo);
    return { playerOne, playerTwo};
}
  document.getElementById("player-one").addEventListener("blur", createPlayer);
    document.getElementById("player-two").addEventListener("blur", createPlayer);
  })();

// players now exist

// Start game
// disable player name input editing until reset game function fires
// create state to track which player is playing
// Add event listeners (onClick) to each square that console log x or 0
// according to which player is playing and then
// disable that square from firing the function on a subsequent click
// switch player once a square has been clicked

// Keep score
// keep track of whether any three cells in the grid have been clicked
// by the same player

// declare a winner in the console if so
// otherwise declare a tie

// function resetGame
// clears all the squares and user input, reenables user input
