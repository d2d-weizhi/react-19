class CProduct{
  // name?: string;
  // unitPrice?: number;
  constructor(public name: string, public unitPrice: number) {
    this.name = name;
    this.unitPrice = unitPrice;
  }

  getDiscountedPrice (discount: number): number {
    return this.unitPrice - discount;
  }
}

const classTable = new CProduct("Table", 45);
console.log(classTable.getDiscountedPrice(5));