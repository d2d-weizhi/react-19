function identity<T> (arg: T): T {
	return arg;
}

let numberOutput = identity<Number>(1);
let stringOutput = identity<String>("String");

console.log(numberOutput);
console.log(stringOutput);