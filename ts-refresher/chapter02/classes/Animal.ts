class Animal {
	name: string;
	constructor (theName: string) {
		this.name = theName;
	}

	move (distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Frog extends Animal {
	constructor (name: string) { super(name); }
	move(distanceInMeters = 5) {
		console.log("Jumping...");
		super.move(distanceInMeters);
	}
}

class Horse extends Animal {
	constructor(name: string) { super(name); }
	move (distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let jack = new Frog("Froggy the Traveller");
let mrhorse: Animal = new Horse("MrHorse");
jack.move();
mrhorse.move(34);