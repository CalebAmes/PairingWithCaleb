# Battleship

Today, you'll write a basic implementation of a single-player [Battleship] game!
There is only one game board - the computer will fill the board with ships at
random, and it will be your job to find and destroy these ships by guessing
their coordinates.

You'll organize your program using multiple classes(HumanPlayer, Board, and
BattleshipGame); each class will have clear responsibilities and encapsulate a
distinct part of the overall game "story".

Hopefully you will have fun creating the game! Notice that the classes are
extracted into different files.

## Phase 0: Game design

In order to come up with a design, you should think of what product you are
trying to create. How do you go about designing the classes and methods needed
for this game?

Start by outlining some goals:

1. You want to implement a game called Battleship.
2. You want your user, a human player, to be able to use the terminal to play
   the game - that means they need to know what the state of the game is, and
   how to tell the game what they want to do.
3. The state of the game can be represented by a board with 10x10 squares, but
   say that you want to make the number of rows and columns variable to be
   flexible (this will be helpful for testing as well).
4. To change the state of the game, a user must attack a square. If that square
   has a ship on it, then that square has been successfully hit. If there is no
   ship, then that's considered a miss. Hits, misses, and squares that haven't
   been attacked yet should be displayed to the player, but not the ships if
   they haven't been hit.

You will create a **game layer** with classes and methods solely handling game
logic, and a **UI layer** with classes and methods solely handling the user
interface. The UI layer will take care of user interaction with the game layer,
managing user input, and showing the current state of the game.

As you are working through the project, think of how you can control the
coupling of your classes with the Law Of Demeter. As a reminder, the definition
of the Law of Demeter is as follows:

_A method of an object can only invoke the methods (or use the properties) of
the following kinds of objects:_

- Methods on the object itself
- Any of the objects passed in as parameters to the method
- An object created in the method
- Any values stored in the instance variables of the object
- Any values stored in global variables

**A starter file for this projected has been created for you, To get started:**

- You can clone the project from github here: [repo]

## Phase 1: User input

In the `humanPlayer.js` file, use the built-in node module, `readline`, to get
user input from the terminal. Here's a reminder on how [readline] works:

```javascript
const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

// Reminder: rl.question is an asynchronous function
rl.question("Whatever prompt you want to ask the user", (answer) => {
  // Do stuff with that answer
  // rl.close() // If you want to close the readline interface
});
```

> **Note**: you should only be instantiating ONE `readline`. Do not create
> multiple interfaces. You should also only have your game ask one question at a
> time.

### Human player

Think about a `HumanPlayer` class. Start by thinking of the responsibilities of
a `HumanPlayer`. An instance of a `HumanPlayer` will take care of logic that
asks for user input through the terminal `readline` and send the user input to
the game logic layer to determine a user's next move.

Whenever a `HumanPlayer` is instantiated, create a new `readline` interface and
store it as a variable (`this.rl`) on the instance of the `HumanPlayer`:

```js
const readline = require("readline");

class HumanPlayer {
  constructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }
}
```

To get the input of a `HumanPlayer`, you can use the `readline` to ask a
question and get an answer with the terminal. In the `getMove` method, ask the
user for their move and process the answer.

Remember, `rl.question` is an asynchronous function, so you can only execute the
next step in the game once the answer comes back. How do you solve this issue?
You can trigger the next step in the game once the answer comes back by invoking
a function. Have the `getMove` method take in a **callback function**
(`processMove`) as a parameter. The callback function will be responsible for
triggering the next step to the game after the user input is received. Pass in
the user's `answer` into the callback function in the form of an array [row,
col]. Think about how you can split the string into an array to accomplish this.
Now take a moment to think and discuss with your partner: is the `HumanPlayer`
class following the Law of Demeter? Why or why not (scroll down after
discussing)?

> Note: You will be defining the `processMove` method in a different class at a
> later phase of the project

As a reminder, a method of an object following the Law of Demeter can only
invoke the methods (or use the properties) of: the object itself, any of the
objects passed in as parameters to the method, an object created in the method,
any values stored in the instance variables of the object, and any values stored
in global variables.

> Is the `HumanPlayer` class following the Law of Demeter? Yes! Although the
> `getMove` method takes in a callback function that can possibly interact with
> another class, this method and connection to the other class This connects to
> how the Law of Demeter allows a class to invoke the methods of "any of the
> objects passed in as parameters to the method".

Now that you've finished the `getMove` method, it's time to handle the
`processGameOver` method. In the `processGameOver` method, print a different
message depending on if the player has won or lost the game using the given
`isWon` parameter that will be a boolean. Then close the readline interface.

At this point you should have completed the code for the HumanPlayer class. It
should look something like the following:

```js
const readline = require("readline");

class HumanPlayer {
  constructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    this.rl.question(
      "Choose a coordinate to hit. (e.g. 3,1) \n> ",
      (answer) => {
        const [row, col] = answer.split(",");
        processMove([row, col]);
      }
    );
  }

  processGameOver(isWon, turns) {
    if (isWon) {
      console.log(`Nice job, you won in ${turns} turns!`);
    } else {
      console.log("You lose!");
    }
    this.rl.close();
  }
}

module.exports = HumanPlayer;
```

Now that you have an initial design plan for the `HumanPlayer` implementation,
lets move on to solving another part of the problem - representing the state of
the game and changing it.

## Phase 2: UI layer

### Game board

In the board.js file, you will give the responsibility of knowing and
maintaining the state of the game to a single class called `Board`. The `Board`
class will take care of rendering an underlying `grid` game board (a
two-dimensional array). Each element in a row represents a ship, open water, or
a space that has already been attacked. The `Board` class is responsible for
remembering the current state of the game and changing the state of the game
based on an attack coordinate.

First, you need to initialize the state of the game. When a new instance of
`Board` is created, you need to create this state. In this problem, you can
represent the state of the board as a 2-D array, `row x col`. You also need to
populate the grid with ships. For now, each ship should only take up one grid
(`1 x 1`).

There are three questions that come to mind:

- How many rows are there?
- How many columns are there?
- And, how many ships are there?

The number of rows, columns, and ships should be determined in the game set-up
process (the instantiation of a battleship game board). To instantiate any game
board, you'll set a game board's `numRows`, `numCols`, and `numShips` through
the `Board` class constructor function.

Now that you know how big the game board should be and how many ships it should
have, you need to create the grid and randomly populate the board with the
number of ships specified. In the `populateGrid` method in the `Board` class,
create a grid using those parameters and set it to `this.grid`. Make sure to
call this method upon initialization. You can use the string `"s"` to represent
an undamaged ship, `null` for an empty space, and `"x"` to represent a destroyed
ship.

Based on what you know about the game state and how it changes, fill in the
remaining methods for the `Board` class. As you are filling these in, feel free
to create additional helper methods if you think certain logic can be extracted
out.

- In the `display()` method, print the game board, with marks on any spaces that
  have been fired upon. (Hint: You can use [console.table()] to nicely display a
  2d array in a grid like fashion )
- In the `count()` method, return the number of valid targets (ships) remaining
- In the `isValidMove()` method, return `true` if the user input results in a
  valid move for a given game board position, false otherwise.
- In the `isGameOver()` method, return `true` when the game is over (a game is
  over when all ships are hit)
- In the `attack()` method, take in an attack position (in the form of an array,
  `[row, col]`) and update `this.grid` depending on whether there's an empty
  space or damaged ship at the attack position (set the value of `this.grid` at
  the position to `"h"`for a ship hit and `'x"`for a miss). A change in the
  state of the game should be triggered when a player determines a valid
  position to hit on the grid.

## Phase 3: Game logic

Now that you have the basic roles of the UI layer covered, how is a
`HumanPlayer` going to interact with a game `Board`? The two classes currently
aren't closely related. According to the Law of Demeter, a method of an object
can only invoke the methods (or use the properties) of:

- Methods on the object itself
- Any of the objects passed in as parameters to the method
- An object created in the method
- Any values stored in the instance variables of the object
- Any values stored in global variables

You know that you need information about both a `HumanPlayer` move and the game
`Board` grid for user to play a turn. Remember how the `HumanPlayer` class has a
`getMove` method that takes in a callback function `processMove`? Based on the
naming of the `processMove` parameter, you can infer that `processMove` is a
function that will take in a user's move, process it, and make something happen
on the game board.

How can you define a function that can access the `HumanPlayer` move and the
`Board` grid, but still follow the Law of Demeter with decoupled classes? You
can solve this by using a separate class (`BattleshipGame`) to handle the
integration between both the game `Board` and `HumanPlayer` user!

As a reminder, a class is considered _decoupled_ when a change in one class
doesn't result in the change of another related class. By creating an interface
`BattleshipGame` class to connect a user and game board, you are keeping your
code flexible and decoupled.

In this case, you want to connect a `HumanPlayer` instance and a game `Board`
instance. Imagine if you connected a `HumanPlayer` instance and a game `Board`
instance by setting a reference to a `HumanPlayer` instance in the `Board` class
constructor - you might have to change the game logic code in the `Board` class
if you ever scale the game and allow for multiple `HumanPlayer` users.

What if you wanted to swap out a `HumanPlayer` with a `ComputerPlayer`. If you
defined a `Battleship` class as an interface between some sort of game user and
the game board, you could easily reference a `ComputerPlayer` instead of a
`HumanPlayer` by simply changing **one** line of code. Keeping your code
decoupled is a great way to prepare your code for maintainability and
scalability in the future. This is one of the most important concepts in OOP.

But first, get back to the interface class between `Board` and `HumanPlayer`!
Think about the process of a game turn to brainstorm what features to
specifically implement in the class integrating `Board` and `HumanPlayer`.
Ideally, a single turn in Battleship would follow this process:

- Display the current state of the game to the player
- Ask for the player's attack coordinates input
- Update the state of the game

In the `game.js` file, the `BattleshipGame` class will store a reference to the
`HumanPlayer` and instantiate a new instance of a `Board`. This way, the methods
within the `BattleshipGame` can connect a player's attack input (received via a
`HumanPlayer`), and relay the user input to the game `Board`.

The `BattleshipGame` class is responsible for handling the flow of the game and
integrating the user input and the logic of the game. When a game is first
created, you need to know a few things:

1. Who is playing the game?
2. How big should the game board grid be?
3. How many ships should the game have?

You'll want to create a new `Board` when a new `BattleshipGame` instance is
created. In order to create a new instance of a game `Board` within the
`BattleshipGame`, you'll need to pass a `numRows`, `numCols`, and `numShips`
into the `BattleshipGame` constructor function. You'll also need to pass in a
`player1` into the constructor, so that the `BattleshipGame` class can store a
reference to an instance of a `HumanPlayer`.

```js
class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {}
}
```

Now that you have the `constructor` method set up, you'll want to set up the
`BattleshipGame` instance variables. Define variables that set up references to
the:

- Player(s) in game
- Current player (select a player to be defaulted as the current player)
- Game board
- Number of game turns (so a player can know how many turns it took to win the
  game)

By setting a reference to specific instances of the `HumanPlayer` and `Board`
classes, the `BattleshipGame` class can easily access the information of those
instances.

When the game first starts, what do you envision happening first? Perhaps the
game will show you the current state of the game and ask for the user's input.
How many times will that happen? This should happen as many times as it takes
until the game is over.

The `playTurn` method in the `BattleshipGame` class that will do those same
repetitive actions in one function. However, how do you initiate the next
`playTurn`? Getting the user input is an asynchronous action and you don't know
when you should initiate the next turn. Remember the callback function parameter
that you passed into `getMove` method in the `HumanPlayer` class? The callback
function that gets passed into the `getMove` method will initiate the next turn.
The `processMove` method in the `BattleshipGame` class will be passed into the
`getMove` method in the `HumanPlayer` class.

Now you will need to complete the `processMove` method. In this method you will
need to accept a position as a parameter, and then check if that position is a
valid move. Next you will need to attack at that position, increment the turns,
and check to see if the attack ended the game. If the game has been won, let the
player know, otherwise you need to prompt the human player for another move.

Great! You handled the user input part of the `playTurn` method, but what about
showing the state of the game? In the `BattleshipGame` class, complete the
`displayStatus` method to show the state of the game. The `BattleshipGame`
instance, though, doesn't know what the state of the game is. The `Board`
instance that it has a reference to does!

To show the state of the game in a readable way to the user, you can invoke the
`display` method that belongs to your board instance. For example, a 5x5 grid
should look something like this if you used `console.table()` in the display
method:

```
*******************************
'h' means hit, 'x' means no-hit
┌─────────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │
├─────────┼─────┼─────┼─────┼─────┼─────┤
│    0    │ '~' │ '~' │ '~' │ '~' │ '~' │
│    1    │ '~' │ 'h' │ '~' │ '~' │ '~' │
│    2    │ '~' │ '~' │ 'x' │ 'x' │ '~' │
│    3    │ '~' │ '~' │ '~' │ '~' │ '~' │
│    4    │ 'h' │ '~' │ '~' │ '~' │ '~' │
└─────────┴─────┴─────┴─────┴─────┴─────┘
```

Lastly, you will need to completed the `processMove` method. In this method you
will need to accept a position as a parameter, and then check if that position
is a valid move. Next you will need to attack at that position, increment the
turns, and check to see if the attack ended them game. If the game has been won,
let the player know, otherwise you need to prompt the human player for another
move.

At this point, review the work you have done. Are there any bits of code
violating the **Law of Demeter**? If yes, then it's time to refactor! For
example, start by checking if any of your methods invoke the methods (or use the
properties) of another class. Remember that the Law of Demeter allows methods to
invoke the methods (or use the properties) of another class for:

- Methods on the object itself
- Any of the objects passed in as parameters to the method
- An object created in the method
- Any values stored in the instance variables of the object
- Any values stored in global variables

Awesome! You should now have a working game if you initiate a new
`BattleshipGame` instance and call the `playTurn` method of the `BattleshipGame`
class. The `main.js` file has already been set up for you to handle the
initialization of your `HumanPlayer` and `BattleshipGame`. Invoke the game
instance's `playTurn` method and run the `main.js` file by typing `node main.js`
in your terminal to start the game!

## Bonus Phase: Computer player

Add a `ComputerPlayer` class that will fire at random positions on the board.
Make it as smart as you can; ensure that it doesn't fire at the same position
twice. You should not need to modify any logic internal to your `Game` class in
order to support computer players.

## Bonus Bonus Phase: Two player mode!

Refactor your game so that there are two players, each with his or her own
board. Players should take turns firing at each other's fleet.

## Bonus Bonus Bonus Phase: Custom setup!

Introduce a "setup" phase, where each player can place ships on their board.

Update your game to use different types of ships, each of a different size. Here
are the canonical ship sizes (though of course you are welcome to choose your
own):

| Ship type                  | Dimensions |
| -------------------------- | ---------- |
| Aircraft carrier           | 5x1        |
| Battleship                 | 4x1        |
| Submarine                  | 3x1        |
| Patrol boat (or destroyer) | 2x1        |

[battleship]: http://en.wikipedia.org/wiki/Battleship_%28game%29 [readline]:
https://nodejs.org/api/readline.html [console.table()]:
https://developer.mozilla.org/en-US/docs/Web/API/Console/table [repo]: TODO
