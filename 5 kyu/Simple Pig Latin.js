// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	let strValidate = []
	for (let key of str.split(' ')) {
		if ((key !== '!') & (key !== '?') & (key !== ',') & (key !== '.')) {
			strValidate.push(key.slice(1) + key[0] + 'ay')
		} else {
			strValidate.push(key)
		}
	}
	return strValidate.join(' ')
}