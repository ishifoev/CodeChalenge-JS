function mergeOverlappingIntervals(array) {
  // Write your code here.
	const sortedIntervals = array.sort((a, b) => a[0] - b[0]);
	let mergeInterval = [];
	let currentInterval = sortedIntervals[0];
	console.log(currentInterval)
	mergeInterval.push(currentInterval)
	for(const nextInterval of sortedIntervals) {
		const[_,currentIntervalEnd] = currentInterval;
		
		const [nextIntervalStart, nextIntervalEnd] = nextInterval;
		
		if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd,nextIntervalEnd)
		else {
			currentInterval = nextInterval;
			mergeInterval.push(currentInterval)
		}
	}
  return mergeInterval;
}
