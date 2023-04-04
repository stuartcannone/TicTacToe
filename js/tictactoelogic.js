console.log(jQuery.fn.jquery);

// make board an empty 3x3 array to match table
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false; // add gameOver flag

const play = function (row, col) {
  if (gameOver) {
    return 'The game is over. Please reset to play again.';
  }
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    if (checkWin(currentPlayer)) {
      gameOver = true; // set gameWon flag to true
      return currentPlayer + ' wins!';
    } else if (checkTie()) {
      gameOver = true; // set gameWon flag to true
      return 'Game over, tie!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      return 'Next move: ' + currentPlayer;
    }
  } else {
    return 'This cell is already occupied. Please select an empty cell.';
  }
}

  // create functions for 3 different win types 

  const checkWin = function(player) {
    // Check rows
   
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
        return true;
      }
    }
    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }
    return false;
  }
  
  // check for tie 
  const checkTie = function() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }
  // The above function iterates through each cell of the board array using nested for loops. 
  //If it finds an empty cell, it immediately returns false, indicating that the game is not over yet.
  //If all cells have been checked and no empty cells are found, the function returns true, indicating that the game has ended in a tie.
 
  // function to reset the board to play again or start over 
  const reset = function() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
  }
  
  // console.log(play(0,0)); // x top left
  // console.log(checkWin);
  // console.log(checkTie);
  // console.log(play(1,0)); // o middle left
  // console.log(play(0,1))// x top middle
  // console.log(play(1,1)) // o middle middle
  // console.log(play(0,2)) // x top right 
  // console.log(checkWin) // x win true
  // console.log(checkTie) // x win tie false


  // debugger


// } else {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   return 'Next move: ' + currentPlayer;
//   Here's a breakdown of the syntax:

// currentPlayer: This is the variable that is being assigned a new value.
// currentPlayer === 'X': This is a comparison expression that checks if currentPlayer is equal to the string 'X'. If it is, the expression evaluates to true; otherwise, it evaluates to false.
// ?: This is the ternary operator itself. It separates the comparison expression from the two possible values that currentPlayer could be assigned.
// 'O': This is the value that currentPlayer will be assigned if the comparison expression is true.
// :: This separates the value that currentPlayer will be assigned if the comparison expression is true from the value that it will be assigned if the comparison expression is false.
// 'X': This is the value that currentPlayer will be assigned if the comparison expression is false.
//if (currentPlayer === 'X') {
//   currentPlayer = 'O';
// } else {
//   currentPlayer = 'X';
// }