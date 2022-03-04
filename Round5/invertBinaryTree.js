// O(n) time | O(n) space
function invertBinaryTree(tree) {
  // Write your code here.
	let queue = [tree];
	
	while(queue.length) {
		let current = queue.shift();
		
		if(current === null) continue
		
		swapLeftAndRight(current)
		queue.push(current.left)
		queue.push(current.right)
	}
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
