/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should take as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *
*/




function shortiesOnly(array) {

    //  WRITE YOUR CODE HERE!

}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortList = shortiesOnly(allNames)

console.assert( shortList.length === 4 )


// checks to see if 'Sam' is INCLUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )

// checks to see if 'Fred' is INCLUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )

// checks to see if WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )
