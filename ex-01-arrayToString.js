/**
 * arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/


function arrayToString(arrayInput){

	// 	WRITE YOUR CODE HERE!

}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(coolArr)

var newArray = ['cool', 'great', 'awesome', 'super']
var output3 = arrayToString(newArray)

var lastARray = ['wow', 'great', 'wow', 'neat']
var output4 = arrayToString(lastARray)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
console.assert( output3 === 'coolgreatawesomesuper' )
console.assert( output4 === 'wowgreatwowneat' )
