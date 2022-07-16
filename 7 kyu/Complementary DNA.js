// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
	return dna.replace(/./g, c => {
		return DNAStrand.pairs[c]
	})
}

DNAStrand.pairs = {
	A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

// function DNAStrand(dna){
//   let str = ''
//   for(let key of dna){
//     if(key == 'A') str += 'T'
//     if(key == 'G') str += 'C'
//     if(key == 'T') str += 'A'
//     if(key == 'C') str += 'G'
//   }
//   return str
// }

// function DNAStrand(dna){
//   let str = ''
//   for(let key of dna){
//     if(key == 'A') str += 'T'
//     if(key == 'G') str += 'C'
//     if(key == 'T') str += 'A'
//     if(key == 'C') str += 'G'
//   }
//   return str
// }