$(document).ready(function() {
    let currentPlayer = 'X';

    $('#board td').click(function() {
      if (gameOver) {
        return; // exit the function if game is already won
      }
      const row = $(this).parent().index();
      const col = $(this).index();
      
      if (board[row][col] !== '') {
        return; // exit the function if the cell is already occupied
      }
      
      const result = play(row, col);  // call play function 
      
      $(this).text(currentPlayer); // input of player marker 
       
      setTimeout(function() {
        if (result === 'X wins!' || result === 'O wins!') {
          alert(result);
        } else if (result === 'Game over, tie!') {
          alert(result);
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        
      }, 300); // how long it takes for the alert window to appear    
    });
    
    
    $('#reset').click(function() {
      // Clear the board state
      reset();
      
      // Clear the table cells
      $('#board td').text('');
      
      // Set the current player to X
      currentPlayer = 'X';
    });
  
  });


 