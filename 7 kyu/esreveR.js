// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function (array) {
	return array.map((item, idx) => array[array.length - 1 - idx])
}
