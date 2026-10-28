class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo() {
    return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.getTemperature()}`;
  }
  getTemperature() {
    return this.#temperature;
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  #prepareDrink() {
    console.log(`Готовим напиток: ${this.name}`);
  }
  serveDrink() {
    this.#prepareDrink();
    console.log(`Напиток ${this.name} подан`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }
  getInfo() {
    const drinkInfo = super.getInfo();
    return `${drinkInfo}, Вид зёрен: ${this.beanType}, Вид молока: ${this.milkType}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, flavor) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.flavor = flavor;
  }
  getInfo() {
    const drinkInfo = super.getInfo();
    return `${drinkInfo}, Тип чая: ${this.teaType}, Аромат: ${this.flavor} `;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, fruitType, syrupType) {
    super(name, size, price, temperature);
    this.fruitType = fruitType;
    this.syrupType = syrupType;
  }
  getInfo() {
    const drinkInfo = super.getInfo();
    return `${drinkInfo}, Тип фрукта: ${this.fruitType}, Сироп: ${this.syrupType} `;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getInfo() {
    return `Название кафе: ${this.name}, Местоположение: ${this.location}`;
  }
  orderDrink(drink) {
    console.log(`Кафе ${this.name} принимает заказ: ${drink.name}`);
    drink.serveDrink();
    console.log(`Заказ выполнен`);
  }
}

const cafe = new Cafe("Кавказская пленница", "г.Орск, ул.Театральная 4");
console.log(cafe.getInfo());

const americano = new Coffee(
  "Американо",
  "300 мл",
  250,
  75,
  "Арабика",
  "Без молока",
);
cafe.orderDrink(americano);
console.log(americano.getInfo());
