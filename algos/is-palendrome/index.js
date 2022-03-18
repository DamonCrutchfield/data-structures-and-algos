function isPalendrome(str){
	// Complete the function!
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length-(i + 1)]) return false;
	}
	return true;
}


function isPermutationPalendrome(str){
	// Complete the function!
	// Cycle through all characters in string except for first character
	// Start by splitting string into an array of letters.
	// h: a, n, n, a, h
	// h: n, n, a, h, a
	// h: n, a, h, a, n
	// h: a, h, a, n, n
	// h: h, a, n, n, a
	// h: a, n, n, a, h
	
}

module.exports = {isPalendrome, isPermutationPalendrome}