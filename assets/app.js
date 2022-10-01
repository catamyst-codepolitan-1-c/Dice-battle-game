// import { getWinner } from "./assets/modules/getWinner.js";

let dices = document.querySelectorAll(".dice");
let scoreElementPlaye1 = document.querySelector("#scoredice1");
let scoreElementPlaye2 = document.querySelector("#scoredice2");
const dice1Element = document.getElementById("dice-01");
const dice2Element = document.getElementById("dice-02");
const dice3Element = document.getElementById("dice-03");
const dice4Element = document.getElementById("dice-04");

function roll() {
  dices.forEach(function (dice) {
    dice.classList.add("shake");
  });

  setTimeout(function () {
    dices.forEach(function (dice) {
      dice.classList.remove("shake");
    });

    let dice1Value = Math.floor(Math.random() * 6) + 1;
    let dice2Value = Math.floor(Math.random() * 6) + 1;
    let dice3Value = Math.floor(Math.random() * 6) + 1;
    let dice4Value = Math.floor(Math.random() * 6) + 1;

    // console.log(diceImages);
    dice1Element.setAttribute("src", `./assets/img/dice-${dice1Value}.svg`);
    dice2Element.setAttribute("src", `./assets/img/dice-${dice2Value}.svg`);
    dice3Element.setAttribute("src", `./assets/img/dice-${dice3Value}.svg`);
    dice4Element.setAttribute("src", `./assets/img/dice-${dice4Value}.svg`);

    // const totalDiceValue = dice1Value + dice2Value + dice3Value + dice4Value;
    playerOne = dice1Value + dice2Value;
    playerTwo = dice3Value + dice4Value;

    scoreElementPlaye1.textContent = playerOne;
    scoreElementPlaye2.textContent = playerTwo;

    // document.getElementById("total").innerHTML =
    //   "Your roll is " + totalDiceValue;
  }, 1000);
}

function inputName() {
  let inputUser1 = document.getElementById("userinput1");
  let inputUser2 = document.getElementById("userinput2");
  let player1 = document.getElementById("playername1");
  let player2 = document.getElementById("playername2");

  player1.textContent = inputUser1.value;
  player2.textContent = inputUser2.value;
}

roll();
