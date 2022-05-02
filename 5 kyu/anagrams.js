function anagrams(word, words) {
	return words.filter(function (item) {
		return item.split('').sort().join('') === word.split('').sort().join('')
	})
}

console.log(anagrams('laser', ['lazing', 'lazy', 'laser']));