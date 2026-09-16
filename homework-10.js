import { products } from "./products.js";
const cardTemplate = document.getElementById("card-template");
const productList = document.getElementById("product-list");
const numberCards = getNumberCards();

function renderCards(products) {
  products.forEach((product) => {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector(".card__image").src = product.image;
    cardClone.querySelector(".card__name").textContent = product.name;
    cardClone.querySelector(".card__category").textContent = product.category;
    cardClone.querySelector(".card__description").textContent =
      product.description;
    cardClone.querySelector(".card__image").alt = product.alt;
    cardClone.querySelector(".price__value").textContent = product.price;

    const compoundItems = product.compound.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    });

    const compoundList = cardClone.querySelector(".compound__list");
    compoundItems.forEach((item) => {
      compoundList.appendChild(item);
    });
    productList.appendChild(cardClone);
  });
}
if (numberCards >= 1 && numberCards <= 5)
  renderCards(products.slice(0, numberCards));

const namesDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(namesDescriptions);

function getNumberCards() {
  const answer = Number(prompt("Сколько карточек отобразить?"));
  if (answer >= 1 && answer <= 5) {
    return answer;
  }
  if (isNaN(answer)) {
    console.log("Некорректные входные данные");
    return;
  }
  if (answer < 1 || answer > 5) {
    console.log("Некорректные входные данные");
  }
}
