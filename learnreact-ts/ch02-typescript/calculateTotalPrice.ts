function calculateTotalPrice(
	product: { name: string, unitPrice: number },
	quantity: number,
	discount: number
) {
	const priceWithoutDiscount = product.unitPrice * quantity;
	const discountAmount = priceWithoutDiscount * discount;
	return priceWithoutDiscount - discountAmount;
}

const table = {
	name: "table",
	unitPrice: 25.00
};

const quantity = 4;

console.log(`Bought ${quantity} ${table.name}s for $${calculateTotalPrice(table, quantity, 0.15)}.`);