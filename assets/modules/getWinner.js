export const getWinner = (player1Choice, player2Choice) => {
  if (player1Choice === player2Choice) {
    return "draw";
  } else if (player1Choice < player2Choice) {
    return "player1";
  } else if (player1Choice > player2Choice) {
    return "player2";
  }
};
