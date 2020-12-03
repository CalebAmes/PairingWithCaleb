// console.table(
//   [['~','~','s',],
//    ['x','~','~',],
//    ['x','~','~',]])

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

// let test = gridPopulator(7, 3);
// console.table(test)

// console.table(gridPopulator(3,5))


// console.table(gridPopulator(10,10))

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

// console.log(shipGenerator(3,4,6))

// let gameBoard = gridPopulator(4,4);
// let gameShips = shipGenerator(4,4,2);

// console.table(gameBoard);
// console.log(gameShips);

// gameBoard[3][0] = 'x'


//init new helper function
//loop through the length of our gameships array
//set gameboard[r][c] to gameships[r,c]

let shipLocationSetter = (shipGenArr, grid) => {
  for(let i = 0; i < shipGenArr.length; i++){
    let row = shipGenArr[i][0];
    let col = shipGenArr[i][1];
    grid[row][col] = 's'
  }
}

let shotTester = (firedShot, grid) => {
    let row = firedShot[0];
    let col = firedShot[1];
    if(grid[row][col] === 's')grid[row][col] = 'h';
    else grid[row][col] = 'x';
}

let grid = gridPopulator(10,10);
let ship = shipGenerator(10,10,50);

const testGrid = grid;

shipLocationSetter(ship, grid)

console.table(grid)
console.table(testGrid)