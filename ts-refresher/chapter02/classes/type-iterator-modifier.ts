interface ICar {
	name: string;
	age: number;
	color?: string;
}

type ReadonlyCar = {
	// readonly [K in keyof ICar]: ICar[K];
	// readonly [K in keyof ICar]?: ICar[K];		// Make all the properties optional
	// Make all the properties a union of their original types + string
	// readonly [K in keyof ICar]?: ICar[K] | string;
	// The 'minus' sign negates any optional flags.
	// The 'add' sign adds the readonly accessor to all properties.
	+readonly [K in keyof ICar]-?: ICar[K] | string;
};

const car:ICar = {
	name: "Mercedes",
	age: 2
};

// Readonly Objects can only set their properties once.
const readOnlyCar: ReadonlyCar = {
	name: "BMW",
	age: 5,
	color: "Blue"
};

car.age = 8;	// the object is mutable.