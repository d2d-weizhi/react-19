interface IBase {
	id: number | undefined;
}

interface IDerivedFromBase extends IBase {
	name: string | undefined;
}

class InterfaceInheritanceClass implements IDerivedFromBase {
	id: number | undefined;
	name: string | undefined;
}

class BaseClass implements IBase {
	id: number | undefined;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
	name: string | undefined;
}