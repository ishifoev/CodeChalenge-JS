function staircaseTraversal(height, maxSteps) {
  // Write your code here.
  return numberOfWaysToTop(height, maxSteps);
}

function numberOfWaysToTop(height, max) {
	if(height <= 1) return 1;
	
	let numberOfWays = 0;
	
	for(let step = 1; step < Math.min(max, height)  + 1; step++) {
		numberOfWays += numberOfWaysToTop(height - step, max)
	}
	return numberOfWays;
}
