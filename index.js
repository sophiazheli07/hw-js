// 1. Створіть 2 класи з наслідуванням один від одного, кількість аргументів та назви класів - на ваш розсуд
// 2. У створеному БАТЬКІВСЬКОМУ класі додайте метод виведення інформації
// 3. Перепишіть батькіський метод виведення інформації у ДОЧІРНЬОМУ класі

class UserSample {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Person - Name: ${this.name}, Age: ${this.age}`);
  }
}

class User extends UserSample {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }

  getInfo() {
    console.log(
      `Person - Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
    );
  }
}

const sample = new UserSample("Sophia", 15);
const user = new User("Igor", 20, "Kyiv");

sample.getInfo();
user.getInfo();

//  БОНУС напишіть функцію, що приймає класс та масив різних об`єктів
// та повертає новий масив з об`єктами, що є екземплярами переданого класу

function filterObjectsByClass(classType, objects) {
  return objects.filter((obj) => obj instanceof classType);
}
// example 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Cars {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

const objects = [
  new Person("Igor", 20),
  new Cars("Dodge", 15000), //creating to check if the filter() works for instanceof class type Person
  new Person("Oleg", 20),
];

const filteredObjects = filterObjectsByClass(Person, objects);
console.log(filteredObjects);