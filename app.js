let diceImg = [
  "./img/dice-1.svg",
  "./img/dice-2.svg",
  "./img/dice-3.svg",
  "./img/dice-4.svg",
  "./img/dice-6.svg",
];

let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
}

let dieOneValue = Math.floor(Math.random() * 5);
let dieTwoValue = Math.floor(Math.random() * 5);
let dieThreeValue = Math.floor(Math.random() * 5);
let dieFourValue = Math.floor(Math.random() * 5);
// console.log(diceImg);
document.querySelector("#dice-01").setAttribute("src", diceImg[dieOneValue]);
document.querySelector("#dice-02").setAttribute("src", diceImg[dieTwoValue]);
document.querySelector("#dice-03").setAttribute("src", diceImg[dieThreeValue]);
document.querySelector("#dice-04").setAttribute("src", diceImg[dieFourValue]);

//     document.querySelector("#total").innerHTML =
//       "Your roll is " +
//       (dieOneValue +
//         1 +
//         (dieTwoValue + 1) +
//         1 +
//         (dieThreeValue + 1) +
//         1 +
//         (dieFourValue + 1));
//   }, 1000);
// }
