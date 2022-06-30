function calculate(num1, num2) {
	return binToDeg(num1) + binToDeg(num2)
}
function binToDeg(num) {
	return num.split('').reduce((acc, current, index) => {
		return (acc += current * Math.pow(2, num.length - 1 - index))
	}, 0)
}
