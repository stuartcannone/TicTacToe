$(document).ready(function() {
    let currentPlayer = 'X';

    $('#board td').click(function() {
      const row = $(this).parent().index();
      const col = $(this).index();
      
      const result = play(row, col);  // call play function 
      
      $(this).text(currentPlayer); // input of player marker 
       
      setTimeout(function() {
        if (result === 'X wins!' || result === 'O wins!') {
          alert(result);
          // Add an if statement to check if the game is over from a win and stop play
          if (result === 'X wins!' || result === 'O wins!') {
        }
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


 