// O(w * h) time | O(w * h) space
function maximumSumSubmatrix(matrix, size) {
  const sums = createSumMatrix(matrix);
	let maxSubMatrixSum = -Infinity;
	
	for(let row = size - 1; row < matrix.length; row++) {
		for(let col = size - 1; col < matrix[row].length; col++) {
			let total = sums[row][col];
			
			const touchesTopBorder = row - size < 0;
			if(!touchesTopBorder) total -= sums[row - size][col];
			
			const touchesLeftBorder = col - size < 0;
			if(!touchesLeftBorder) total -= sums[row][col - size];
			
			const touchesTopOrLeftBorder = touchesTopBorder || touchesLeftBorder;
			if(!touchesTopOrLeftBorder) total += sums[row - size][col - size];
			
			maxSubMatrixSum = Math.max(maxSubMatrixSum, total);
		}
	}
	return maxSubMatrixSum;
}

function createSumMatrix(matrix) {
	const sums = [];
	for(let row = 0; row < matrix.length; row++) {
		sums.push([]);
		for(let col = 0; col < matrix[row].length; col++) {
			sums[row].push(0)
		}
	}
	sums[0][0] = matrix[0][0];
	
	//Fill the first row
	for(let idx = 1; idx < matrix[0].length; idx++) {
		sums[0][idx] = sums[0][idx - 1] + matrix[0][idx];
	}
	
	//Fill the first column
	for(let idx = 1; idx < matrix.length; idx++) {
		sums[idx][0] = sums[idx - 1][0] + matrix[idx][0];
	}
	
	//Fill the rest of the matrix
	for(let row = 1; row < matrix.length; row++) {
		for(let col = 1; col < matrix[row].length; col++) {
			sums[row][col] = sums[row - 1][col] + sums[row][col - 1] - sums[row - 1][col - 1] + matrix[row][col];
		}
	}
	return sums;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;
