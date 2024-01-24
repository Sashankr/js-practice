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
function person(name,age){
  this.name = name;
  this.age = age;
  this.details = function (){
    return this.name + "is" + this.age + "years old";
  }
}

const sashank = new person("Sashank",26);
console.log("Before ES6");
console.log(sashank.details());

// After ES6

// Two ways to create a class
// 1. Class Declaration
// 2. Class Expression

class Individual{

constructor(name,age){
 this.name = name;
 this.age = age;
}
details(){
return `${this.name}'s age is ${this.age}`
}
}

const personal= new Individual("Sashank",26);
console.log("ES6 Class Declaration");
console.log(personal.details());

