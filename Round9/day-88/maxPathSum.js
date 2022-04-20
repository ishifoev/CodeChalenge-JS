//O(n) time | O(log(n)) space
function maxPathSum(tree) {
  const [_, maxSum] = findMaxSum(tree);
	return maxSum;
}
function findMaxSum(tree) {
	if(tree === null) return [0, -Infinity];
	const[leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
	const[rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
	const maxClildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
	
	const {value} = tree;
	const maxSumAsBranch = Math.max(maxClildSumAsBranch + value, value);
	const maxSumAsRootNode =  Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch)
	const maxPathSum =  Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)
	return [maxSumAsBranch, maxPathSum];
}
