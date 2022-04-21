// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time | O(n) space where n is the number of nodes in the tree
function findNodesDistanceK(tree, target, k) {
  const nodesToParents = {};
	populateNodesToParents(tree, nodesToParents);
	const targetNode = getNodeFromValue(target, tree, nodesToParents)
	
	return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents,k);
}
function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
	const queue = [[targetNode, 0]];
	const seen = new Set([targetNode.value]);
	while(queue.length > 0) {
		const [currentNode, distanceFromTarget] = queue.shift();
		if(distanceFromTarget === k) {
			const nodeDistanceK = queue.map(pair => pair[0].value)
			nodeDistanceK.push(currentNode.value)
			return nodeDistanceK;
		}
		const connectedNodes = [currentNode.left, currentNode.right,nodesToParents[currentNode.value]]
		for(const node of connectedNodes) {
			 if(node === null) continue;
			if(seen.has(node.value)) continue;
			seen.add(node.value);
			queue.push([node, distanceFromTarget + 1]);
		}
	}
	return [];
}
function getNodeFromValue(value, tree, nodesToParents) {
	if(tree.value === value) return tree;
	const nodeParent = nodesToParents[value];
	if(nodeParent.left !== null && nodeParent.left.value === value) return nodeParent.left;
	return nodeParent.right;
}
function populateNodesToParents(node, nodesToParent, parent = null) {
	if(node !== null) {
		nodesToParent[node.value] = parent;
		populateNodesToParents(node.left, nodesToParent, node);
		populateNodesToParents(node.right, nodesToParent, node);
	}
}
