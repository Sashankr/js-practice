/*
Set is a collection of unique values of any type, including NaN and undefined


Syntax
const set = new Set([iterable])
iterable - can be an array or array of objects

Following are the methods:
*/

// Add Method - If an iterable object is added to the set then all its items are added to it.
const set = new Set();
set.add(1);
set.add(2);
set.add(3);

console.log([...set]); // [1,2,3]

const name = new Set('Sashank');

console.log('set 1 size : ', set.size); // 3
console.log('set 2 size : ', name.size); // 6 ('S','a','s','h','n','k') two small a's one is not considered

// Has Method - find if an element is present in the set

const values = [1,2,3,4,5];
const valuesSet = new Set(values);
console.log('values',values);
console.log('values has 1? ',valuesSet.has(1))
console.log('values has 8? ',valuesSet.has(8));

// Remove item from set
console.log('values',values); // [1,2,3,4,5]
valuesSet.delete(3);
console.log('values after delete',[...valuesSet]); // [1,2,4,5]

// Iterate on set

values.forEach(val => console.log(val)); 1,2,3,4,5

for(val of values){
 console.log(val); // 1,2,3,4,5
}

//Using .next()

const collectionSet = new Set();
collectionSet.add(1);
collectionSet.add(true);
collectionSet.add({a:1,b:2});

const iterator = collectionSet.values();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // true
console.log(iterator.next().value); // {a:1,b:2};

/*
WeakSet
A weak set can only store objects
Weak set is not iterable
They have has, add and delete methods
They do not have size property as well
*/

const team = new WeakSet();

let obj1 = {name:"John",role:"developer"}
let obj2 = {name:"Jacob",role:"designer"}
let obj3 = {name:"Ralph",role:"tester"}

team.add(obj1);
team.add(obj2);
team.add(obj3);

console.log(team);

// when we make the object stored in weakset to null
// it automatically detects this and removes it
console.log(team);
obj1 = null;
console.log(team);
