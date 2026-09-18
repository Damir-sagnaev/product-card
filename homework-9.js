//2) создание массива чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(function (number) {
  return number > 4;
});
console.log(result);

//3) создание массива строк и поиска элемента
const phones = ["iPhone", "Xiaomi", "Samsung", "Asus", "Honor"];
function phoneSearch(phone) {
  if (typeof phone === "string") {
    return phones.includes(phone);
  }
  return "Некорректные входные данные";
}
console.log(phoneSearch("Samsung"));

//4)функция которая переворачивает массив
function reverse(array) {
  return array.reverse();
}
reverse(phones);
reverse(numbers);

console.log(phones);
console.log(numbers);

//5-6 добавление файла comments.js и его экспорт
import { comments } from "./comments.js";
console.log(comments);

//7) вывод в консоль комментариев с почтой заканчивающихся на .com
const comComments = comments.filter((comment) => {
  return comment.email.includes(".com");
});

console.log(comComments);

//8) перебор массива с помощью map
comments.map((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else comment.postId = 1;
});

console.log(comments);

//9) перебор массива что бы объекты состояли только из айди и имени
const newComments = comments.map((comment) => {
  return {
    name: comment.name,
    id: comment.id,
  };
});

console.log(newComments);

//10) перебор массива добавляем объектам свойство isInvalid
comments.forEach((comment) => {
  comment.isInvalid = comment.body.length > 180;
});

console.log(comments);

//11-12) вывод массив почт используя reduce и привести его к строке
const emails = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);

console.log(emails.toString());
