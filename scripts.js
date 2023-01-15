const test = "Heja, tu test!";
console.log(test);
const message = document.getElementById("message");
const gameboard = document.getElementById("gameboard");
const hero = document.getElementById("hero");
const endMessage = document.getElementById("endMessage");

const stitches = 6;
const fields = 28;
let heroPosition = 0;

const roll = () => {
  const rollResult = Math.ceil(Math.random() * stitches);
  alert("Wynik rzutu: " + rollResult);
  endMessage.textContent = "";
  message.textContent = "Gracz porusza się o " + rollResult + " do przodu.";
  moveHero(rollResult);
};

const moveHero = (value) => {
  heroPosition = heroPosition + value;
  console.log(heroPosition);
  if (heroPosition > 28) {
    heroPosition = 0;
    setHeroPosition();
    message.textContent = "";
    endMessage.textContent = "KONIEC GRY! Docierasz do mety!";
    return;
  }
  setHeroPosition();
};

const setHeroPosition = () => {
  const targetField = gameboard.children[heroPosition];
  const targetPosTop = targetField.offsetTop;
  const targetPosLeft = targetField.offsetLeft;
  hero.style.top = targetPosTop + 18 + "px";
  hero.style.left = targetPosLeft + 18 + "px";
};

const createGameBoard = () => {
  for (let i = 0; i < fields; i++) {
    const field = document.createElement("div");
    const fieldNumber = document.createElement("p");
    gameboard.appendChild(field);
    field.setAttribute("class", "field");
    field.setAttribute("id", i);
    field.appendChild(fieldNumber);
    fieldNumber.textContent = i + 1;
  }
};

const setFieldsOnBoard = () => {
  [...gameboard.children].forEach((elem, index) => {
    if (index < 10) {
      elem.style.top = "0px";
      elem.style.left = 80 * index + 1 + "px";
    }

    if (index >= 10 && index < 15) {
      elem.style.left = 80 * 9 + "px";
      elem.style.top = 80 * (index - 9) + "px";
    }

    if (index >= 15 && index < 24) {
      elem.style.top = 80 * 5 + "px";
      elem.style.right = 80 * (index - 14) + "px";
    }

    if (index >= 24) {
      elem.style.left = "0px";
      elem.style.bottom = 80 * (index - 23) + "px";
    }
  });
};

createGameBoard();
setFieldsOnBoard();
