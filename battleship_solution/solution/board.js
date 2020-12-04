class Board {
  constructor(numRows, numCols, numShips) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();
  }

  populateGrid() {
    const grid = [];
    for (let i = 0; i < this.numRows; i++) {
      // This are using the new Array constructor and filling it with null
      // values.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
      grid.push(Array(this.numCols).fill(null));
    }

    let count = this.numShips;
    while (count > 0) {
      const randomRow = Math.floor(Math.random() * this.numRows);
      const randomCol = Math.floor(Math.random() * this.numCols);

      if (grid[randomRow][randomCol] === null) {
        grid[randomRow][randomCol] = "s";
        count--;
      }
    }
    return grid;
  }

  display() {
    // We are making use of nested .map's and a ternary statement to change any
    // 's' and null inside of our grid to be a "wave" (~) 'x' and 'h' will
    // remain the same because we want our user to see those marks.
    const displayGrid = this.grid.map((row) => {
      return row.map((col) => (col === "s" || col === null ? "~" : col));
    });

    console.table(displayGrid);
  }

  count() {
    return this.numShips;
  }

  isValidMove(pos) {
    const [row, col] = pos;

    // First we checked to see that the position is a valid input from the
    // original readline quesiton.
    if (row == null || col == null) {
      return false;
    }

    // Next we check to make sure the input is in a valid range.
    const isPositionOutOfBounds =
      row < 0 || row >= this.numRows || col < 0 || col >= this.numCols;

    if (isPositionOutOfBounds) {
      return false;
    }

    // If it's a valid range, we then need to make sure its not a position
    // they've already tried.
    const isPreviouslyMadeMove =
      this.grid[row][col] === "h" || this.grid[row][col] === "x";

    if (isPreviouslyMadeMove) {
      return false;
    }

    // If none of the above returns false we know that it is a valid move and
    // can return true.
    return true;
  }

  isGameOver() {
    return this.numShips === 0;
  }

  attack(pos) {
    const [row, col] = pos;
    const target = this.grid[row][col];
    if (target === "s") {
      this.grid[row][col] = "h";
      this.numShips--;
    } else {
      this.grid[row][col] = "x";
    }
  }
}

let testBoard = new Board(10, 10, 3);
//console.table(testBoard);
//console.table(testBoard.populateGrid())
console.table(testBoard.grid)

module.exports = Board;
