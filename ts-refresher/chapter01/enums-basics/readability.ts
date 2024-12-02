enum DoorState {
	Open,
	Closed,
	Ajar
}

var closedDoor = DoorState["Closed"];
console.log(`closedDoor is: ${closedDoor}`);