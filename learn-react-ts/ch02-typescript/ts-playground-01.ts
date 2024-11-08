let unitPrice: number;
let flag;
let today: Date;
today = new Date();
today.setMonth(today.getMonth() + 2);

fetch("https://swapi.dev/api/people/1")
  .then((response) => response.json())
  .then((data: unknown) => {
    if (isCharacter(data)) {
      console.log("name", data.name);
    }
  });

function isCharacter(character: any): character is { name: string } {
  return "name" in character;
}

function logText(text: string) {
  console.log(text);
}

// Arrays
let numbers: number[] = [];

// alternately, we can use the Array generic type syntax
const numbers02: Array<number> = [];


numbers = [1, 2, 3];

// Exploring object types

// type Purchase = (quantity: number) => void;

interface Product {
  name: string;
  unitPrice?: number;
  purchase: Purchase;
}

interface DiscountedProduct extends Product {
  discount: number;
}

interface Purchase {
  (quantity: number): void
}

// type Product = {
//   name: string; 
//   unitPrice?: number; 
//   purchase: Purchase; 
//   };

let table : Product = { 
  name: "Table",
  purchase: (quantity) => console.log(`Purchased ${quantity} tables`) 
};
table.purchase(4);

// let chair : Product = { 
//   name: "Chair", 
//   unitPrice: 40,
//   purchase: (quantity) => console.log(`Purchased ${quantity} chairs`)
// };
// chair.purchase(6);

// // extending another object
// type DiscountedProduct = Product & { discount: number };

// let chairOnSale: DiscountedProduct = {
//   name: "Chair on Sale",
//   unitPrice: 30,
//   discount: 5,
//   purchase: (quantity) => console.log(`Purchased ${quantity} chairs (on sale)`)
// };

