/*Javascript is a prototype based programming language

Javascript was not designed for object oriented programming, but as the language got popular, in ES6 Classes were introduced

Classes in Javascript do bring a new object oriented inheritence model, but internally use the same prototypical inheritence

Before ES6 this is how classes were used

- Create a function

function person(name,age){
 this.name = name;
 this.age = age;
}

// calling functions like class

const p1 = new person("sashank",23);
const p2 = new person("john",22);

// Declaring methods

1. Declaring inside function

function person(name,age){
  this.name = name;
  this.age = age;
  this.details = function (){
    return this.name + "is" + this.age + "years old";
  }
}

2. Declaring in protoptype

person.prototype.details = function (){
    return this.name + "is" + this.age + "years old";
  }

// 2. Declaring in protoptype

person.prototype.details = function (){
    return this.name + "is" + this.age + "years old";
  }


*/
function person(name, age) {
  this.name = name;
  this.age = age;
  this.details = function () {
    return this.name + "is" + this.age + "years old";
  };
}

const sashank = new person("Sashank", 26);
console.log("Before ES6");
console.log(sashank.details());

// After ES6

// Two ways to create a class
// 1. Class Declaration
// 2. Class Expression

class Individual {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  details() {
    return `${this.name}'s age is ${this.age}`;
  }
}

const personal = new Individual("Sashank", 26);
console.log("ES6 Class Declaration");
console.log(personal.details());

// Class Expression can be written in 2 ways
// Named Class Expression
// Unnamed Class Expression

const PersonUnNamed = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  details() {
    console.log("Unnamed Class Expression");
    return `${this.name}'s age is ${this.age}`;
  }
};

const PersonNamed = class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  details() {
    console.log("Named class expression");
    return `${this.name} age = ${this.age}`;
  }
};
const user1 = new PersonUnNamed("Sashank", 26);
const user2 = new PersonNamed("H", 26);
console.log(user1.details());
console.log(user2.details());

// Advantages of classes

/*

 1. Unlike functions classes are not hoisted, remaining in temporal dead zone until execution
 2. Code inside a class runs in strict mode.
 3. Methods inside a class are not enumerable.
 4. Calling class constructor without new keyword will result in an error.
 5. Creating class without a constructor will result in an error.
 6. Having a method name same as class name will cause an error.

*/

// Static methods
// These methods are acccecible only by the parent and not available to derived child or instance of the class

console.log(`----------Statitic Methods----------
  `);

class StaticMethodExample {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  details() {
    return `The Car Manufacturer is ${this.make} and model is ${this.model}`;
  }
  static myStaticDetails() {
    return `This is my static method`;
  }
}

const car = new StaticMethodExample("Porche", 911);
console.log(car.details());
console.log(StaticMethodExample.myStaticDetails());
// console.log(car.myStaticDetails()); Error myStaticDetails is not a function
console.log(`
  Accessor properties----------
  `);
// Accessor Properties
// We can use accessor properties get and set with classes

class PersonSetter {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set nickName(name) {
    this.name = name;
  }
  get nickName() {
    console.log("Nickname from getter : ", this.name);
    return `Nickname ${this.name}`;
  }
}

const newPerson = new PersonSetter("Sashank R", 26);
newPerson.nickName = "Sash";
newPerson.nickName;

console.log(`
  Computed methods----------
  `);
//

let methodName = "getDetails";

class Computed {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  [methodName]() {
    console.log(`Computed method name `, this.name);
  }
}

const computed = new Computed("Sashank", 26);
computed[methodName]();

console.log(`
  Accessor Computed methods----------
  `);
//

let accessorMethodName = "newName";

class ComputedAccessor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set [accessorMethodName](name) {
    this.name = name;
  }
  get [accessorMethodName]() {
    console.log("Name from computed accessor", this.name);
  }
}

const accessorComputed = new ComputedAccessor("Sashank", 26);
accessorComputed[accessorMethodName] = "Sasha";
accessorComputed[accessorMethodName];

console.log(`
  Inheritence----------
  `);
//

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    console.log("Area: ", this.length * this.width);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const rectangle = new Rectangle(10, 20);
rectangle.getArea();
const square = new Square(10);
square.getArea();

/*
Things to keep in mind when using extends keyword
Make sure to add a constructor in the class that is extending and also super keyword, otherwise there will be an error.

If the parent has any static method, they will be accessible to new class as well.

new.target can be used to check current instance of class and where it is called from.
*/

/*
   One of the most powerful features of es6 is deriving class from an expression
   You can use extends with any expression as long as it resolves with a function
   with [[Construct]] and a prototype

*/

function RectangleFunc(length, width) {
  this.length = length;
  this.width = width;
}

RectangleFunc.prototype.getArea = function () {
  console.log("Area is ", this.length * this.width);
};

class SquareEx extends RectangleFunc {
  constructor(length) {
    super(length, length);
  }
}

const sqaureInstance = new SquareEx(10, 10);
sqaureInstance.getArea();
