class Product {
  constructor(public name: string, public unitPrice: number) {
    this.name = name;
    this.unitPrice = unitPrice;
  }

  getDiscountedPrice(discount: number): number {
    return this.unitPrice - discount;
  }
}

const table = new Product("Table", 45);
console.log(table.getDiscountedPrice(5));

// Enums

enum Level {
  Low = 1, Medium = 2, High = 3
}

let level = Level.Low;
console.log(level);
level = Level.High;
console.log(level);

// union types

type RGB = "red" | "green" | "blue";

let color: RGB = "red";