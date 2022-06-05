// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


function firstNonRepeatingLetter(s) {
	let text = s.toLowerCase()
	for (let key of text) {
		if (text.indexOf(key) === text.lastIndexOf(key)) {
			return s.includes(key) ? key : key.toUpperCase()
		}
	}
	return ''

	// let objLetters = {};
	// for(let key of s.toLowerCase()) {
	// 	if(objLetters[key]) objLetters[key]++;
	// 	else objLetters[key] = 1;
	// };
	// for(let key in objLetters){
	// 	if(objLetters[key] == 1){
	// 		return s.includes(key) ? key : key.toUpperCase()
	// 	}
	// };
	// return ''
}