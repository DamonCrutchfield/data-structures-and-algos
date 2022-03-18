function pairSum(arr, sum){
	/**
	 * Looks for a pair of numbers in a list that equal a target sum, 
	 * and returns true if a pair is found or false if a pair is not found.
	 * 
	 * pairSum([1, 2, 3], 6) => false, because no two numbers in list equal 6
	 * pairSum([1, 2, 3], 5) => true, because 2 + 3 === 5
	 * 
	 * 1.)loop over array of numbers
	 * 	a.) find index of sum minus current number 
	 * 	and check if that index is not equal to current index
	 * 	b.) return true
	 * 2.) if loop exits that means no pair was found, so return false
	 */

	//Solution 1

	for (let i = 0; i < arr.length; i++) {
		let number = arr[i];
		if (arr.indexOf(sum - number) !== i && arr.indexOf(sum - number) !== -1) {
			return true;
		}
	}
	return false;


}

module.exports = pairSum