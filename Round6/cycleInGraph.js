function cycleInGraph(edges) {
  // Write your code here.
	const numberOfEdges = edges.length;
	const visited = new Array(numberOfEdges).fill(false);
	const currentlyInStack = new Array(numberOfEdges).fill(false);
	
	for(let node = 0; node < numberOfEdges; node++) {
		if(visited[node]) continue;
		
		const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack)
		if(containsCycle) return true;
	}
  return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
	visited[node] = true;
	currentlyInStack[node] = true;
	const neightbors = edges[node];
	
	for(const neighbor of neightbors) {
		if(!visited[neighbor]) {
			const containCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack)
			if(containCycle) return true;
		} else if(currentlyInStack[neighbor]) {
			return true;
		}
	}
	currentlyInStack[node] = false;
	return false;
}
