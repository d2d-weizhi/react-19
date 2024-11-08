function calculateTotalPrice(
	product: { name: string; unitPrice: number },
	quantity: number,
	discount: number
) {
	const priceWithoutDiscount = product.unitPrice * quantity;
	const discountAmount = priceWithoutDiscount * discount;
	return priceWithoutDiscount - discountAmount;
}

console.log(calculateTotalPrice({ name: "apple", unitPrice: 2  }, 10, 0.15));