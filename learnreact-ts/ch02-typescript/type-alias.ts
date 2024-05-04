type Purchase = (quantity: number) => void;
type Product = { 
	name: string; 
	unitPrice?: number;
	purchase: Purchase;
};

let table: Product = { 
	name: "Table",
	purchase: (quantity) =>
		console.log(`Purchased ${quantity} tables`),
};
// let chair: Product = { name: "Chair", unitPrice: 40 };

table.purchase(4);

type DiscountedProduct = Product & { discount: number };

// let chairOnSale: DiscountedProduct = {
// 	name: "Chair on Sale",
// 	unitPrice: 30,
// 	discount: 5,
// };