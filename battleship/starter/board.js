let gridPopulator = (rows, cols) => {
  let grid = [];
  for(let i = 0; i < rows; i ++){
    grid.push([]);
    for(let j = 0; j < cols; j++){
      grid[i].push('~')
    }
  }
  return grid
}
let shipGenerator = (rows, cols, numShips) => {
  let shipLocations = [];
  for(let i = 0; i < numShips; i ++){
    let row = Math.floor(Math.random() * rows);
    let col = Math.floor(Math.random() * cols);
    row !== col
    shipLocations.push([row, col])
  }
  return shipLocations
}
let shipLocationSetter = (shipGenArr, grid) => {
  for(let i = 0; i < shipGenArr.length; i++){
    let row = shipGenArr[i][0];
    let col = shipGenArr[i][1];
    grid[row][col] = 's'
  }
}



class Board {
  constructor(numRos, numCols, numShips) {
    this.numRos = numRos;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();

    //this.grid = populateGrid()

    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
  }

  populateGrid() {
    let grid = gridPopulator(this.numRos, this.numCols)
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let shipLocations = shipGenerator(this.numRos, this.numCols, this.numShips)
    shipLocationSetter(shipLocations, grid);
    return grid
  }

  display() {

    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

let testBoard = new Board(10, 10, 3);
//console.table(testBoard);
//console.table(testBoard.populateGrid())
console.table(testBoard.grid)
module.exports = Board;
