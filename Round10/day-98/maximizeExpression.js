// O(n) time | O(n) space - where n is the length of the array
function maximizeExpression(array) {
  if(array.length < 4) return 0;
	
	const maxOfA = new Array(1).fill(array[0]);
	const maxOfAMinusB = new Array(1).fill(-Infinity);
	const maxOfMinusBPlusC = new Array(2).fill(-Infinity);
	const maxmaxOfMinusBPlusCMinusD = new Array(3).fill(-Infinity);
	
	for(let idx = 1; idx < array.length; idx++) {
		const currentMax = Math.max(maxOfA[idx - 1], array[idx]);
		maxOfA.push(currentMax);
	}
	
	for(let idx = 1; idx < array.length; idx++) {
		const currentMax = Math.max(maxOfAMinusB[idx - 1], maxOfA[idx - 1] - array[idx]);
		maxOfAMinusB.push(currentMax);
	}
	
	for(let idx = 2; idx < array.length; idx++) {
		const currentMax = Math.max(maxOfMinusBPlusC[idx - 1], maxOfAMinusB[idx - 1] + array[idx]);
		maxOfMinusBPlusC.push(currentMax);
	}
	
	for(let idx = 3; idx < array.length; idx++) {
		const currentMax = Math.max(maxmaxOfMinusBPlusCMinusD[idx - 1], maxOfMinusBPlusC[idx - 1] - array[idx]);
		maxmaxOfMinusBPlusCMinusD.push(currentMax);
	}
	return maxmaxOfMinusBPlusCMinusD[maxmaxOfMinusBPlusCMinusD.length - 1];
}

// Do not edit the line below.
exports.maximizeExpression = maximizeExpression;
