export class ParseIntBasedZipCodeValidator {
	isAcceptable(s: string) {
		return s.length === 5 && parseInt(s).toString() === s;
	}
}

// Exports the original validator by renaming it.
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';