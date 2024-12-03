interface ISquareConfig {
	colour?: string;
	width?: number;
	[propName: string]: any;	// any other potential properties
}

function createSquare (config: ISquareConfig): {colour: string, area: number} {
	let newSquare = { colour: "white", area: 100 };
	if (config.colour) {
		newSquare.colour = config.colour;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mySquare = createSquare({ colour: "black" });