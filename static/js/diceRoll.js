function rollDice() {
  setTimeout(turn, 1500);
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  face = Math.floor(Math.random() * (max - min + 1)) + min;
  return face;
}

//document.getElementById("roll-button").addEventListener("click", rollDice);
