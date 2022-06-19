// Write a function which will accept a sequence of numbers and calculate the variance for the sequence.

// The variance for a set of numbers is found by subtracting the mean from every value, squaring the results, adding them all up and dividing by the number of elements.

// For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].

// mean = (1 + 2 + 2 + 3) / 4
// => 2

// variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
// => 0.5
// The results are tested after being rounded to 4 decimal places using Javascript's toFixed method.

var variance = function(numbers) {
  let average = numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
  return numbers.reduce((prev, curr) => prev + (curr - average) ** 2, 0) / numbers.length
};