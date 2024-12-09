interface Card {
	suit: string;
	card: number;
}

interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}

let deck : Deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array[52],
	createCardPicker: function(this: Deck) {
		// ATTENTION: the line below is an arrow function that captures the value of 'this' 
		// from this place
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);
			return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
		};
	}
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);