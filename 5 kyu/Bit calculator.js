// In this kata your task is to create bit calculator. Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.

// Test.expect(calculate("10","10") == 4);
// Test.expect(calculate("10","0") == 2);
// Test.expect(calculate("101","10") == 7);
// parseInt and some Math functions are disabled.

// Those Math functions are enabled: pow,round,random

function calculate(num1, num2) {
	return binToDeg(num1) + binToDeg(num2)
}
function binToDeg(num) {
	return num.split('').reduce((acc, current, index) => {
		return (acc += current * Math.pow(2, num.length - 1 - index))
	}, 0)
}