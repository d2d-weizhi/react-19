interface IFirstInterface {
	id: number | undefined;
}

interface ISecondInterface {
	name: string | undefined;
}

class MultipleInterfaces implements IFirstInterface, ISecondInterface {
	id: number | undefined;
	name: string | undefined;
}