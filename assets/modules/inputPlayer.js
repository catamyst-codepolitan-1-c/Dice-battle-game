export const inputPlayer = () => {
  let inputUser1 = document.getElementById("userinput1");
  let inputUser2 = document.getElementById("userinput2");
  let player1 = document.getElementById("playername1");
  let player2 = document.getElementById("playername2");

  player1.textContent = inputUser1.value;
  player2.textContent = inputUser2.value;
};
