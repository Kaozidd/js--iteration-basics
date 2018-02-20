
/**
 * simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/

const names = [
	"Arturo",
	"Homer",
	"Homero",
	"Marge",
	"Margolia"
]


function simpOrSamp(list) {
	let lastName = "";
	for (i = 0; i < list.length; i++) {
		if (list[i].length < 6) {
			list[i] += " Sampson";
		} else {
			list[i] += " Simpson";
		}
	}
	return list;
}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList)

// console.assert( modifiedNamesList[1] === 'OJ Sampson' )
// console.assert( modifiedNamesList[2] === 'Marge Sampson' )
// console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
// console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
