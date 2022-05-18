// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
	if (p1 == p2) return 'Draw!'
	let rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' }
	return 'Player ' + (p2 == rules[p1] ? 1 : 2) + ' won!'
}