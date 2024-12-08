abstract class Department {
	constructor (public name: string) {

	}

	printName(): void {
		console.log(`Department name: ${this.name}`);
	}

	abstract printMeeting(): void;	// must be implemented in a derived class
}

class AccountingDepartment extends Department {
	constructor () {
		super("Accounting and Auditing");
	}

	printMeeting(): void {
		console.log("The Account Department meets each Monday at 10am.");
	}

	generateReports(): void {
		console.log("Generating accounting reports...");
	}
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
(department as AccountingDepartment).generateReports();