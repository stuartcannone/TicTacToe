console.log(jQuery.fn.jquery);
// make board an empty 3x3 array to match table
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  let currentPlayer = 'X';
  
  // create a function to take a row and column input for a move 
  const play = function (row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      if (checkWin(currentPlayer)) {
        return currentPlayer + ' wins!';  // check if current move creates a win 
      } else if (checkTie()) {
        return 'Game over, tie!';  // check if the current move creates a tie 
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // moves to next play 
        return 'next move';
      }
    } else {
      return 'too late you cannot mark here'; // make sure cell is not already filled 
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
  // function to reset the board to play again or start over 
  const reset = function() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
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