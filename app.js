let diceImg = [
  "./img/dice-1.svg",
  "./img/dice-2.svg",
  "./img/dice-3.svg",
  "./img/dice-4.svg",
  "./img/dice-6.svg",
];

let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (dice) {
    dice.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (dice) {
      dice.classList.remove("shake");
    });

    let diceOneValue = Math.floor(Math.random() * 5);
    let diceTwoValue = Math.floor(Math.random() * 5);
    let diceThreeValue = Math.floor(Math.random() * 5);
    let diceFourValue = Math.floor(Math.random() * 5);
    // console.log(diceImg);
    document
      .getElementById("dice-01")
      .setAttribute("src", diceImg[diceOneValue]);
    document
      .getElementById("dice-02")
      .setAttribute("src", diceImg[diceTwoValue]);
    document
      .getElementById("dice-03")
      .setAttribute("src", diceImg[diceThreeValue]);
    document
      .getElementById("dice-04")
      .setAttribute("src", diceImg[diceFourValue]);

    document.getElementById("total").innerHTML =
      "Your roll is " +
      (diceOneValue +
        1 +
        (diceTwoValue + 1) +
        1 +
        (diceThreeValue + 1) +
        1 +
        (diceFourValue + 1));
  }, 1000);
}

roll();
