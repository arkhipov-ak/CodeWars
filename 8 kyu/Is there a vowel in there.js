// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

const isVow = a => a.map(x=>'aeiou'.includes(y = String.fromCharCode(x)) ? y : x)

// function isVow(a){
//   let arr = ['a', 'e', 'i', 'o', 'u']
//   return a.map(elem => arr.includes(String.fromCharCode(elem)) ? String.fromCharCode(elem) : elem)
// }