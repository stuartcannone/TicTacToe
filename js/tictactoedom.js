$(document).ready(function() {
    let currentPlayer = 'X';
  
    // add click event to each cell
    $('#board td').click(function() {
      // check if cell is empty
      if ($(this).text() === '') {
        // mark cell with current player's symbol
        $(this).text(currentPlayer);
        if (checkWin(currentPlayer)) {
          alert(currentPlayer + ' wins!');
        } else if (checkTie()) {
          alert('Game over, tie!');
        } else {
          // switch to next player
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });
  console.log(checkTie)
  console.log(checkWin)