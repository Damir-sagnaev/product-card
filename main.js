const productCards = document.querySelectorAll(".products__item");
const changeColorButton = document.querySelector(
  "#change-color-all-card-button",
);

const colorHash = "#ea0000";
const colorBlue = "#1f04bc";

// смена цветов всех карточек
changeColorButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = colorHash));
});

//смена цвета одной карточки
const productCard = document.querySelector(".products__item");
const blueFirstCard = document.querySelector("#change-color-card-button");

blueFirstCard.addEventListener("click", () => {
  productCard.style.backgroundColor = colorBlue;
});

// открыть google
const openGoogleButton = document.querySelector("#open-google-button");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите перейти в Google?");

  if (answer === true) {
    window.open("https://google.com");
  }
}

// консоль лог
const outputButton = document.querySelector("#output-log-button");
outputButton.addEventListener("click", () =>
  outputConsoleLog("какой-то текст"),
);
function outputConsoleLog(message) {
  console.log(message);
}

// смена цвета кнопки
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  button.classList.toggle("blue");
});
// вывел в консоль контент элемента при наведении курсором
const titleCard = document.querySelector(".catalog__title");
titleCard.addEventListener("mouseover", () => {
  console.log(titleCard.textContent);
});
