function eachCons(array, n) {
	const res = []
	for (let i = 0; i < array.length; i++) {
		if (array.length < i + n) break
		res.push(array.slice(i, i + n))
	}
	return res
}