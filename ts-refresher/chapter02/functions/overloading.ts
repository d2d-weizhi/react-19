function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
	return x + y;
}

let result1 = add(5, 7);
console.log(result1);
let result2 = add("5", "7");
console.log(result2);