// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
	let volume = width * height * depth;
	let area = 2 * (height * width) + 2 * (height * depth) + 2 * (width * depth);
	return [area, volume];
}
