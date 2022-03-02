// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//O(n) time | O(n) space
function findKthLargestValueInBst(tree, k) {
  // Write your code here.
	let sortedValues = [];
	InOrderTraverse(tree,sortedValues);
	return sortedValues[sortedValues.length - k]
  return -1;
}
function InOrderTraverse(node,sortedValues) {
	if(node === null) return;
	InOrderTraverse(node.left, sortedValues)
	sortedValues.push(node.value)
	InOrderTraverse(node.right, sortedValues)
}
