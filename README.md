# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game features two players, a scoreboard, and highlights winning combinations. 

## Features

- **Two-Player Mode**: Play Tic-Tac-Toe against another player. Player 1 uses 'X', and Player 2 uses 'O'.
- **Score Tracking**: Scores for Player 1 and Player 2 are tracked and displayed. A draw count is also maintained.
- **Winning Highlight**: Winning combinations are highlighted with a CSS class.
- **Game Reset**: Reset the game board and scores with a reset button.

## Gameplay

1. **Starting the Game**: The game starts with Player 1 (X). Players alternate turns by clicking on the cells of the 3x3 grid.
2. **Winning the Game**: The game checks for winning combinations after each move. If a player wins, the winning cells are highlighted and the score for the winning player is updated.
3. **Draw Condition**: If all cells are filled and no player has won, the game results in a draw.
4. **Resetting the Game**: Click the "Reset" button to clear the board and reset scores.

## Code Explanation

- **`let cells`**: Array of all cells in the game board.
- **`let btn`**: The reset button.
- **`let arr`**: Array representing the state of the game board.
- **`let cur`**: Variable tracking the current player ('X' or 'O').
- **`let ply1`, `let ply2`, `let draw`**: Elements displaying scores and draw count.
- **`let hArr`**: Array to store the indices of the winning cells.
- **`let plyS1`, `let plyS2`, `let drw`**: Variables to track scores and draw count.

### Functions

- **`clearAll()`**: Clears the game board and resets the current player to 'X'.
- **`highlight(hArr)`**: Highlights the cells of a winning combination.
- **`checkWin()`**: Checks for a win or draw after each move and updates scores accordingly.
- **`checked(e)`**: Handles cell clicks, updates the board, switches players, and checks for a win.

### Event Listeners

- **Cell Clicks**: Each cell has an event listener that updates the board and checks for a win.
- **Reset Button**: The reset button has an event listener that resets scores and clears the board.

## Usage

1. Clone the repository or download the source files.
2. Open the `index.html` file in a web browser to start playing.
