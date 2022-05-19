function expression(num, operator) {
	if (!operator) return num
	return operator(num)
}

function zero(operator) {
	return expression(0, operator)
}
function one(operator) {
	return expression(1, operator)
}
function two(operator) {
	return expression(2, operator)
}
function three(operator) {
	return expression(3, operator)
}
function four(operator) {
	return expression(4, operator)
}
function five(operator) {
	return expression(5, operator)
}
function six(operator) {
	return expression(6, operator)
}
function seven(operator) {
	return expression(7, operator)
}
function eight(operator) {
	return expression(8, operator)
}
function nine(operator) {
	return expression(9, operator)
}

function plus(x) {
	return function (y) {
		return y + x
	}
}
function minus(x) {
	return function (y) {
		return y - x
	}
}
function times(x) {
	return function (y) {
		return y * x
	}
}
function dividedBy(x) {
	return function (y) {
		return Math.floor(y / x)
	}
}
