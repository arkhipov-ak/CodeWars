// Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

// Пример
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
	string = string.split('').map(function (element) {
		if (element === element.toUpperCase()) element = ' ' + element
		return element
	})
	return string.join('')
};
