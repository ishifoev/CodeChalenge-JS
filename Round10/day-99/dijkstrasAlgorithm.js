/ O(v ^ 2 + e) time | O(v) space
function dijkstrasAlgorithm(start, edges) {
  const numberOfVehicles = edges.length;
	
	const minDistances = [];
	for(let i = 0; i < numberOfVehicles; i++) {
		minDistances.push(Infinity);
	}
	minDistances[start] = 0;
	
	const visited = new Set();
	
	while(visited.size != numberOfVehicles) {
		const [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited);
		
		if(currentMinDistance === Infinity) {
			break;
		}
		
		visited.add(vertex);
		
		for(const edge of edges[vertex]) {
			const[destination, distanceToDestination] = edge;
			
			if(visited.has(destination)) {
				continue;
			}
			
			const newPathDistance = currentMinDistance + distanceToDestination;
			const currentDestinationDistance = minDistances[destination];
			if(newPathDistance < currentDestinationDistance) {
				 minDistances[destination] = newPathDistance;
			}
		}
	}
	
	return minDistances.map(x => (x === Infinity ? - 1: x));
}

function getVertexWithMinDistance(distances, visited) {
	let currentMinDistance = Infinity;
	let vertex = 1;
	
	for(const[vertexId, distance] of distances.entries()) {
		if(visited.has(vertexId)) {
			continue;
		}
		if(distance <= currentMinDistance) {
			vertex = vertexId;
			currentMinDistance = distance;
		}
	}
	return [vertex, currentMinDistance];
}
