const readline = require("readline");

class HumanPlayer {
  constructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    this.rl.question("Choose a coordinate to hit. (e.g. 3,1)\n> ", (answer) => {
      // Here we chose to split on a comma to make sure that we have both a row
      // and a col index to target. Imagine if the board was an 11x11 grid, you
      // wouldn't be able to just enter in 1111. It would need to be 11,11
      const [row, col] = answer.split(",");
      // NOTE: `processMove` is not defined in the `HumanPlayer` class, but it
      // will be passed in as an argument to the `getMove` method so we will
      // have the access to call it here.
      processMove([Number(row), Number(col)]);
    });
  }

  processGameOver(isWon, turn) {
    if (isWon) {
      console.log(`Nice job, you won in ${turn} turns!`);
    } else {
      console.log("You lose!");
    }
    this.rl.close();
  }
}

module.exports = HumanPlayer;
