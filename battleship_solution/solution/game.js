const Board = require("./board");

class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {
    this.player1 = player1;
    this.currentPlayer = player1;
    this.board = new Board(numRows, numCols, numShips);
    this.turns = 0;
  }

  playTurn() {
    this.displayStatus();
    // We are wrapping processMove inside of an annonymous function so that it
    // retains it's context of what 'this' is. Otherwise, in the constructor we
    // would have to write this.processMove = this.processMove.bind(this)
    this.currentPlayer.getMove((pos) => this.processMove(pos));
  }

  displayStatus() {
    console.log("\n*******************************");
    console.log("'h' means hit, 'x' means no-hit\n");
    this.board.display();
  }

  processMove(pos) {
    console.clear();
    // NOTE: this.board is equal to an instance of our board class that is
    // defined in our constructor method and so we have access to all the
    // instance methods on the board.
    if (this.board.isValidMove(pos)) {
      this.board.attack(pos);
      this.turns++;
      if (this.board.isGameOver()) {
        this.displayStatus();
        this.currentPlayer.processGameOver(true, this.turns);
      } else {
        this.playTurn();
      }
    } else {
      console.log("Please enter a valid move.");
      this.playTurn();
    }
  }
}

module.exports = BattleshipGame;
