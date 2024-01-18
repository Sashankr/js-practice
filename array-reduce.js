/*reduce is a powerful array method that can help us perform operations like
- aggrigation
- segregation
- executing operations in sequence

Syntax
arr.reduce(callbackFunc,initialValue)

Verbose
arr.reduce((previousValue,currentValue,currentIndex,array)=>{	
	const nextValue = previousValue + currentValue;
	return nextValue
},initialValue)

The callback function has 4 parameters
previousValue - value of the previous function call or initialValue at the start.
currentValue  - current iteration index array value.
currentIndex  - current index of the function
array - the array itself.
*/




// Aggregation

const numbersList = [1,2,3,4,5,6];
const sumTotal = numbersList.reduce((previousValue,currentValue)=>{
	const nextValue = previousValue + currentValue;
	return nextValue
},0) 
console.log("Sum of numbers",sumTotal);

const productTotal = numbersList.reduce((previousValue,currentValue)=>{
	const nextValue = previousValue * currentValue;
	return nextValue;
},1)

console.log("Product of numbers", productTotal);

// Separation

const arr = [1.1,1.2,1.3,2.1,2.2,2.3];
const segregated = arr.reduce((previousValue,currentValue)=>{
 const floored = Math.floor(currentValue);
 if(!previousValue[floored]){
	previousValue[floored] = []
 }
 previousValue[floored].push(currentValue);
 return previousValue;

},{})

console.log("segregated",segregated)

// Running in sequence

const upperCase = str => str.toUpperCase();
const reverse = str => str.split('').reverse().join('');
const append = str => "Hello" + str

const operations = [upperCase,reverse,append];

const initialValue = "Sashankr"

const result = operations.reduce((previousValue,nextElement)=>{
 const nextValue = nextElement(previousValue);
 return nextValue;
}

,initialValue)

console.log("Operations result",result);

// Promise Executor

function asyncTask(i){

	return new Promise((resolve,reject)=>{
	
		setTimeout(()=>{
			resolve("Resolving"+i)
		},i*100)
	
	})

}

const promises = [
asyncTask(3),
asyncTask(1),
asyncTask(2),
asyncTask(5),
]

const promiseExecutor = (promises) => {
 return promises.reduce((previous,current)=>{
 return previous.then(()=>{
	return current.then(value => console.log(value))
 })
   
 
 },Promise.resolve())
}

promiseExecutor(promises);
