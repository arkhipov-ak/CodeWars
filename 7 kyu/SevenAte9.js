// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
	return str.replace(/79(?=7)/g, '7')
}

// Solution without regex

function sevenAte9(str) {
	let strValidate = ''
	for (let i = 0; i < str.length; i++) {
		if (str[i - 1] == 7 && str[i + 1] == 7 && str[i] == 9) {
			strValidate += ''
		} else {
			strValidate += str[i]
		}
	}
	return strValidate
}
