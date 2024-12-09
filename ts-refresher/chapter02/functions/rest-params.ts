function buildName2 (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Jonas", "Pitt", "Lucas", "Samuel");