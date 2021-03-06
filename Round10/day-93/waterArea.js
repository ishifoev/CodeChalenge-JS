//O(n) time | O(1) space - where n is the length of the input array
function waterArea(heights) {
  if(heights.length === 0) return 0;
	
	let leftIdx = 0;
	let rightIdx = heights.length - 1;
	let leftMax = heights[leftIdx];
	let rightMax = heights[rightIdx];
	let surfaceArea = 0;
	
	while(leftIdx < rightIdx) {
		if(heights[leftIdx] < heights[rightIdx]) {
			leftIdx++;
			leftMax = Math.max(leftMax, heights[leftIdx]);
			surfaceArea += leftMax - heights[leftIdx];
		} else {
			rightIdx--;
			rightMax = Math.max(rightMax, heights[rightIdx]);
			surfaceArea += rightMax - heights[rightIdx];
		}
	}
	return surfaceArea;
}
