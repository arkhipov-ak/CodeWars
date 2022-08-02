function whoIsPaying(name) {
	return name.length > 2 ? [name, name[0] + name[1]] : [name]
}
