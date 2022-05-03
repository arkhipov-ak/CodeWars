// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
function scramble(str1, str2) {
	let holder = {};
	for (let key of str1) {
		if (holder[key]) holder[key]++;
		else holder[key] = 1;
	};
	for (let key of str2) {
		if (!holder[key]) return false;
		else holder[key]--;
	};
	return true;
};
