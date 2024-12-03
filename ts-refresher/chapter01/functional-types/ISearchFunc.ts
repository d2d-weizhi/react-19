interface ISearchFunc {
  (source: string, subString: string) : boolean;
}

let mySearch: ISearchFunc;
mySearch = function(source: string, subString: string) {
	let result = source.search(subString);
	if (result == -1) {
		return false;
	} else {
		return true;
	}
}