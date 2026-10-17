import { Modal } from "./Modal.js";
import { Form } from "./Form.js";
// добавил логику к футеру
const footerForm = new Form("footer-form");

footerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formValues = footerForm.getValues();
  console.log({
    email: formValues.email,
  });
  footerForm.reset();
});
// открытие модалки при клике на кнопку регистрация
const registrationButton = document.querySelector(".registration__button");
const registrationModal = new Modal("modal-main");

registrationButton.addEventListener("click", () => {
  registrationModal.open();
});

// добавление валидации
const registrationForm = new Form("registration-form");
let user;

registrationForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert("Регистрация отклонена");
    return;
  }
  const formValues = registrationForm.getValues();

  if (formValues.password !== formValues["repeat-password"]) {
    alert("Пароли не совпадают");
    return;
  }
  user = {
    firstName: formValues["first-name"],
    surName: formValues["sur-name"],
    birthDate: formValues["birth-date"],
    login: formValues.login,
    password: formValues.password,
    createdOn: new Date(),
  };
  console.log(user);
  registrationForm.reset();
  registrationModal.close();
});
