// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(s) {
	if (s.length == 1) return [s]

	let arr = s.split(''),
		tmp = arr.slice(),
		heads = [],
		out = []

	arr.forEach(elem => {
		if (heads.indexOf(elem) == -1) {
			heads.push(elem)
			tmp.splice(tmp.indexOf(elem), 1)

			permutations(tmp.join('')).forEach(letter => {
				out.push(elem + letter)
			})
			tmp.push(elem)
		}
	})
	return out
}
