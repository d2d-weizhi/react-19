import { StringValidator } from "./Validation";
import { ZipCodeValidator } from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

// A few test cases
let strings = ["Hello", "98052", "101"];

// Validators
let validators: { [s: string]: StringValidator; } = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// For each row, shows whether it passed each validator
strings.forEach(s => {
	for (let name in validators) {
		console.log(`"${s}" - ${validators[name].isAcceptable(s) ? " matches" : " does not match"} ${name}`);
	}
});