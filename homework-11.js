// добавил логику к футеру
const form = document.querySelector(".footer__form");
const email = document.querySelector("#email");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log({
    email: email.value,
  });
});
// открытие модалки при клике на кнопку регистрация
const registrationButton = document.querySelector(".registration__button");
const modal = document.querySelector(".modal");

registrationButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
});
// закрытие модалки при нажатии на крестик
const modalClose = document.querySelector(".modal__close");

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
});

// добавление валидации
const registrationForm = document.querySelector(".registration-form");
const firstName = document.querySelector("#first-name");
const surName = document.querySelector("#sur-name");
const birthDate = document.querySelector("#birth-date");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
let user;

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    alert("Регистрация отклонена");
    return;
  }

  if (password.value !== repeatPassword.value) {
    alert("Пароли не совпадают");
    return;
  }
  user = {
    firstName: firstName.value,
    surName: surName.value,
    birthDate: birthDate.value,
    login: login.value,
    password: password.value,
    createdOn: new Date(),
  };
  console.log(user);
  modal.classList.remove("modal-showed");
});
