function rgb(r, g, b) {
	function toHex(color) {
		if (color < 0) return '00'
		if (color > 255) return 'FF'
		return ('0' + Number(color).toString(16)).slice(-2).toUpperCase()
	}
	return toHex(r) + toHex(g) + toHex(b)
}
