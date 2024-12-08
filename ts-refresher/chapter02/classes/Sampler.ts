class Sampler {
	greeting: string;
	constructor (message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

let sampler = new Sampler("world");

console.log(sampler.greet());