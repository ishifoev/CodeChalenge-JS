// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(h) time | O(1) space - where h is the height of the tree
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  if(isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree,nodeTwo);
	
	if(isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne,nodeTwo);
	
	return false;
}

function isDescendant(node, target) {
while(node !== null && node !== target) {
	node = target.value < node.value ? node.left : node.right 
}	
	return node === target;
}
