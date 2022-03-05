// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
	if(tree === null) return new TreeInfo(0, 0)
	
	
	let leftTreeInfo = getTreeInfo(tree.left)
	let rightTreeInfo = getTreeInfo(tree.right)
	
	let longestPathThroghRoot = leftTreeInfo.height + rightTreeInfo.height
	
	let maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter)
	
	let currentDiameter = Math.max(longestPathThroghRoot, maxDiameterSoFar)
	
	let currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height)
	
	return new TreeInfo(currentDiameter,currentHeight)
}

class TreeInfo {
	constructor(diameter, height) {
		this.diameter = diameter;
		this.height = height;
	}
}
