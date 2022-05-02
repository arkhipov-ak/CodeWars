function scramble(str1, str2) {
	let holder = {};
	for (let key of str1) {
		if (holder[key]) holder[key]++;
		else holder[key] = 1;
	};
	for (let key of str2) {
		if (!holder[key]) return false;
		else holder[key]--;
	};
	return true;
};
console.log(scramble('commas', 'commas'));
