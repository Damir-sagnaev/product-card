class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("Животное ест");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    console.log("Собака лает");
  }
}

const dog = new Dog("Собака", 2, "Алабай");
console.log(dog.name, dog.age, dog.breed);
dog.eat();
dog.bark();
