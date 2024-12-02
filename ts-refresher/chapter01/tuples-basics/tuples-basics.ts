// Declare a tuple type
let x: [String, Number];

// Initialize it 
x = ["hello", 10];

console.log('Tuple values: ', x);
console.log('First element: ', x[0]);
console.log('Second element: ', x[1]);

// Deconstruction
let [t1, t2] = x;
console.log('t1: ', t1);
console.log('t2: ', t2);