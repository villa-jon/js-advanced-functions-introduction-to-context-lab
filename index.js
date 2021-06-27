// Your code here
let testEmployee = {
	firstName: `${firstName}`, 
	familyName: `${familyName}`, 
	title: `${title}`, 
	payPerHour: `${payPerHour}`,};

// document.addEventListener("DOMContentLoaded", () => {
function createEmployeeRecord(array) {
	let testEmployee 
	return testEmployee= {
		firstName: array[0], 
		familyName: array[1], 
		title: array[2], 
		payPerHour: array[3],
		timeInEvents: [],
		timeOutEvents: []}
	
}

const createEmployeeRecords = (arrays) => {
	return arrays.map(createEmployeeRecord)	
}

const rediculous = (getType, dateStamp) => {
	return {type: getType, date: dateStamp.slice(0, 10), hour: parseInt(dateStamp.slice(-4))}
}

const createTimeInEvent = (obj, dateStamp) => {
	obj.timeInEvents.push(rediculous("TimeIn", dateStamp))
	return obj
	
}

const createTimeOutEvent = (obj, dateStamp) => {
	obj.timeOutEvents.push(rediculous("TimeOut", dateStamp))
	return obj
	
}

const hoursWorkedOnDate = (obj, dateDYM) => {
	let timeIn = obj.timeInEvents.find((w) => w.date === dateDYM).hour
	let timeOut = obj.timeOutEvents.find((w) => w.date === dateDYM).hour
	return (timeOut - timeIn)/100
}

const wagesEarnedOnDate = (obj, dateDYM) => {
	let money = obj.payPerHour
	let hoursWorked = hoursWorkedOnDate(obj, dateDYM)
	return money * hoursWorked
}

const allWagesFor = (obj) => {
	let allWages = obj.timeInEvents.map((w) => {return wagesEarnedOnDate(obj, w.date)})
	return allWages.reduce((jobs, coins) => jobs + coins)
}

const findEmployeeByFirstName = (ArrayFinder, Name) => {
	return ArrayFinder.find((record) => record.firstName === Name)
}

const calculatePayroll = (records) => {
	let allPay = (records.map((employee) => {return allWagesFor(employee)} ))
	return allPay.reduce((jobs, coins) => jobs + coins)	 
}

// createEmployeeRecords()
// createTimeInEvent()
// createTimeOutEvent()
// findEmployeeByFirstName()
// calculatePayroll()

// })



