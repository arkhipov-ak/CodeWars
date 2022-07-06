function correctPolishLetters (string) {
  const obj = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  }
  return string.split('').map(elem => Object.keys(obj).includes(elem) ? obj[elem] : elem).join('')
}

// function correctPolishLetters (string) {
//   const dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
//   return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
// }