// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
	let max = str[0].length
	for (let key of str.split(' ')) {
		if (key.length > max) max = key.length
	}
	return max
}