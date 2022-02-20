//O(n) time | O(1) space
function isMonotonic(array) {
  // Write your code here.
	let isNoneDecreasing = true;
	let isNoneIncreasing = true;
	
	for(let i = 1; i < array.length; i++) {
		if(array[i] < array[i - 1]) isNoneDecreasing = false
		if(array[i] > array[i - 1]) isNoneIncreasing = false
	}
	return isNoneDecreasing || isNoneIncreasing;
}
