Math.round = function (number) {
	return +number.toFixed()
}

Math.ceil = function (number) {
	return parseInt(number) === number ? number : parseInt(number) + 1
}

Math.floor = function (number) {
	return parseInt(number)
}