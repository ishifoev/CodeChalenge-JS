//O(n ^ 2) time | O(1) space
function firstDuplicateValue(array) {
  // Write your code here.
	let minimumSecondIndex = array.length;
	for(let i = 0; i < array.length; i++) {
		let value = array[i];
		for(let j = i + 1; j < array.length;j++) {
		  let valueToCompare = array[j];
			
			if(value === valueToCompare) {
				minimumSecondIndex = Math.min(minimumSecondIndex, j)
			}
    }
	}
	if(minimumSecondIndex === array.length) return -1;

  return array[minimumSecondIndex];
}
