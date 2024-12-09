// Named function
// function add (x, y) {
// 	return x + y;
// }

// Anonymous function
let myAdd = function(x, y) {
	return x + y;
};

let z = 50;

// Accessing external variables
function addToZ(x, y) {
	return x + y + z;
}

// Function with Types
function add (x: number, y: number): number {
	return x + y;
}