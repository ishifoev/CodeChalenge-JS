// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

//O(n) time | O(n) space
function findSuccessor(tree, node) {
  // Write your code here.
 let inOrderTraversalOrder = getInOrderTraversal(tree);
	
	for(let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
		const currentNode = inOrderTraversalOrder[idx];
		
		if(currentNode !== node) continue;
		
		if(idx === inOrderTraversalOrder.length - 1) return null;
		
		return inOrderTraversalOrder[idx + 1];
	}
}

function getInOrderTraversal(node, order = []) {
	if(node === null) return order;
	
	getInOrderTraversal(node.left, order);
	order.push(node)
	getInOrderTraversal(node.right, order);
	
	return order;
}
