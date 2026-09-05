// 3 задание: объект с личными данными
const user = {
  name: "Дамир",
  firstName: "Сагнаев",
  age: 24,
  job: "Официально безработный",
  country: "Россия",
  city: "Орск",
};
// 4 задание: объект с данными об автомобиле
const car = {
  brand: "Nissan",
  model: "Almera Classic b10",
  releaseYear: 2007,
  color: "green",
  transmission: "Механическая КПП",
};
car.owner = user;

console.log(car);

// 5 задание: добавление и проверка функции с максимальной скоростью
function addMaxSpeed(car, speed) {
  if (car.hasOwnProperty("Максимальная скорость")) {
    console.log(
      `Максимальная скорость уже задана: ${car["Максимальная скорость"]}`,
    );
    return;
  }
  car["Максимальная скорость"] = speed;
  console.log(`Задана новая максимальная скорость ${speed}`);
}

addMaxSpeed(car, 177);
addMaxSpeed(car, 200);

// 6 задание: функция, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение
function showProperty(object, property) {
  console.log(object[property]);
}

showProperty(user, "city");

//7 задание: создание массива в котором названия продуктов
const product = ["молоко", "хлеб", "сметана", "сыр"];

// 8 задание: создание объектов внутри массива
const books = [
  {
    title: "Война и Мир",
    author: "Лев Толстой",
    releaseYear: 1863,
    genre: "роман-эпопея",
  },
  {
    title: "Мусульманские легионы во Второй мировой войне",
    author: "Олег Валентинович Романько",
    releaseYear: 2004,
    genre: "документальное произведение",
  },
  {
    title: "Услада очей в разъяснении прав жен и мужей",
    author: "шейх Абу 'Абд ир-Рахман Джамиль ибн Каид ас-Саляуи",
    releaseYear: 2017,
    genre: "исламская литература",
  },
];

books.push({
  title: "Сахих аль-Бухари",
  author: "Мухаммад аль-Бухари",
  releaseYear: 846,
  genre: "исламская литература",
});

//9 задание: Объединение двух массивов
const educationalBooks = [
  {
    title: "Ловушки мышления",
    author: "Чип Хиз и Дэн Хиз",
    releaseYear: 2013,
    genre: "саморазвитие",
  },
  {
    title: "Как научиться учиться",
    author: "Ульрих Бозер",
    releaseYear: 2017,
    genre: "саморазвитие",
  },
];

const allBooks = [...books, ...educationalBooks];

console.log(allBooks);

//10 задание: метод map
const rareBooks = allBooks.map(function (book) {
  if (book.releaseYear > 2000) {
    book.isRare = true;
  } else {
    book.isRare = false;
  }
  return book;
});

console.log(rareBooks);
