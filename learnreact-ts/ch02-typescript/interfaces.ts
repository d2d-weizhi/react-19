interface IPurchase { (quantity: number): void }
interface IProduct {
  name: string;
  unitPrice?: number;
  purchase: IPurchase;
}

interface IDiscountedProduct extends IProduct {
  discount: number;
}

let anotherTable: IProduct = { 
	name: "Table",
	purchase: (quantity) =>
		console.log(`Purchased ${quantity} tables`),
};

anotherTable.purchase(4);