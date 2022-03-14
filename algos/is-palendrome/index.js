function isPalendrome(str){
	// Complete the function!
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length-(i + 1)]) return false;
	}
	return true;
}


function isPermutationPalendrome(str){
	// Complete the function!
	
}

module.exports = {isPalendrome, isPermutationPalendrome}