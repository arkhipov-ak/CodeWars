const arrayMadness = (a, b) =>
	a.reduce((prev, curr) => prev + curr ** 2, 0) >
	b.reduce((prev, curr) => prev + curr ** 3, 0)
