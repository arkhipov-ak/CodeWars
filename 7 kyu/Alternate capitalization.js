// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

const capitalize = str => {
	return [0, 1].map(r =>
		[...str]
			.map((letter, i) => (i % 2 === r ? letter.toUpperCase() : letter))
			.join('')
	)
}
