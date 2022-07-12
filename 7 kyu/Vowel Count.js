// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
	let vowelsCount = 0
	let strClone = str.split('')

	for (let key of strClone) {
		if (key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
			vowelsCount++
		}
	}
	return vowelsCount
}