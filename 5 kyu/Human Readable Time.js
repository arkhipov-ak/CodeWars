// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	let pad = function (x) {
		return x < 10 ? '0' + x : x
	}
	return (
		pad(parseInt(seconds / (60 * 60))) +
		':' +
		pad(parseInt((seconds / 60) % 60)) +
		':' +
		pad(seconds % 60)
	)
}

// function humanReadable(seconds) {
// 	let hours = Math.floor(seconds / 3600)
// 	let minutes = Math.floor((seconds % 3600) / 60)
// 	let sec = Math.floor((seconds % 3600) % 60)
// 	if (String(hours).length == 1) {
// 		hours = String(hours).padStart(2, '0')
// 	}
// 	if (String(minutes).length == 1) {
// 		minutes = String(minutes).padStart(2, '0')
// 	}
// 	if (String(sec).length == 1) {
// 		sec = String(sec).padStart(2, '0')
// 	}
// 	return `${hours}:${minutes}:${sec}`
// }