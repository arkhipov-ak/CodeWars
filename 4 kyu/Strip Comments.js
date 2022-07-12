// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
	return input
		.split('\n')
		.map(line =>
			markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
		)
		.join('\n')
}

// function solution(input, markers) {
//   let founded = false;
//   let validInput = input.split('').reduce((acc, letter) => {
//     if(markers.includes(letter)){
//       founded = true;
//     }
//     if(founded && letter === '\n'){
//       founded = false;
//     } 
//     if(!founded) {
//       acc.push(letter)
//     }
//     return acc
//   }, [])
//   return validInput.join('').replace(/\s\n/, '\n').trim()
// };