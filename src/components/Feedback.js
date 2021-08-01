import React from 'react';

function Feedback({isDraw,isGameOn,winner}) {    
  if (winner) {
    return <h4>The winner is {winner}</h4>;
  }

  if (isDraw) {
    return <h4>Match is draw</h4>;
  }
  
  if (isGameOn) {
    return <h4>Game is on</h4>;
  }

  return (<h4>Play Tic Tac Toe</h4>);
}

export default Feedback;