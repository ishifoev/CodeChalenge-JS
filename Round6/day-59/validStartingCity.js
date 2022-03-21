function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
	let numberOfCities = distances.length;
	
	for(let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++) {
		let milesRemaining = 0;
		for(let currentCityIdx = startCityIdx; currentCityIdx <  startCityIdx + numberOfCities; currentCityIdx++) {
			if(milesRemaining < 0) continue;
			const currentCityIdxRotated = currentCityIdx % numberOfCities
			
			let fulelFromCurrentCity = fuel[currentCityIdx]
			let distanceToNextCity = distances[currentCityIdx]
			let milesRemaining += fulelFromCurrentCity * mpg - distanceToNextCity;
		}
		if(milesRemaining >= 0) return startCityIdx
	}
  return -1;
}
