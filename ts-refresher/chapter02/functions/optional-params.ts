function buildName (firstName: string, lastName = "Smith") {
	return firstName + " " + lastName;
}

let result1 = buildName("Sam");
console.log(result1);