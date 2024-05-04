let fName:string = "Fred";
console.log("firstName", fName, typeof fName);
let tsScore = 9;
console.log("score", tsScore, typeof tsScore);
let tsDate: Date = new Date(2024, 10, 1);
console.log("date", tsDate, typeof tsDate);
tsDate.setMonth(tsDate.getMonth() + 2);
console.log("date", tsDate, typeof tsDate);