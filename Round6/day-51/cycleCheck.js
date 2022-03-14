//O(n) time| O(1) space
function hasSingleCycle(array) {
  // Write your code here.
	let numberVisited = 0;
	let currentIndex = 0;
	
	while(numberVisited < array.length) {
		if(numberVisited > 0 && currentIndex === 0) return false
		numberVisited++;
		currentIndex = getNextIndex(currentIndex, array);
	}
	return currentIndex === 0;
}
 function getNextIndex(currentIndex, array) {
	 const jump = array[currentIndex];
	 
	 const nextIndex = (currentIndex + jump) % array.length;
	 return nextIndex >= 0 ? nextIndex: nextIndex + array.length;
 }
