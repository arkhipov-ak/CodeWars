// We need prime numbers and we need them now!
// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,
// 11 => [2, 3, 5, 7, 11]

function prime(num) {
	let primes = [];
	loop: for(let i = 2; i <= num; i++) {
		for(j = 0; i <= primes.length; j++) {
			if(i % primes[j] === 0) continue loop;
		}
	}
	return primes;
}