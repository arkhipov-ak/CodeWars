// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function high(x) {
	let arr = []
	x.split(' ').forEach(element => {
		let numbers = 0
		for (let key of element.split('')) {
			numbers += key.charCodeAt() - 96
		}
		arr.push(numbers)
	})
	return x.split(' ')[arr.indexOf(Math.max(...arr))]
}