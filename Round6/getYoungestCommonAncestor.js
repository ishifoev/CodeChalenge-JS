// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

//O(d) time | O(1) space
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
	const depthOne = getDescendingDepth(descendantOne, topAncestor)
	const depthTwo = getDescendingDepth(descendantTwo, topAncestor)
	
	if(depthOne > depthTwo) {
		return backTrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
	} else {
		return backTrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)
	}
}
function getDescendingDepth(descendant, topAncestor) {
	let depth = 0;
	while(descendant !== topAncestor) {
		depth++;
		descendant = descendant.ancestor
	}
	return depth;
}
function backTrackAncestralTree(lowerDescending, higherDescending,diff) {
	while(diff > 0) {
		lowerDescending = lowerDescending.ancestor;
		diff--;
	}
	while(lowerDescending !==  higherDescending) {
		lowerDescending = lowerDescending.ancestor;
		higherDescending = higherDescending.ancestor;
	}
	return lowerDescending
}
