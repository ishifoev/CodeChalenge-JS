//O(n * l) time | O(c) space
function minimumCharactersForWords(words) {
  const maximumCharacterFrequences =  {};
	
	for(const word of words) {
		const characterFrequencies = countCharacterFrequencies(word);
		updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequences);
	}
	return makeArrayFromCharacterFrequencies(maximumCharacterFrequences)
}

function countCharacterFrequencies(string) {
const characterFrequencies = {};
	
	for(const character of string) {
			if(!(character in characterFrequencies)) {
				characterFrequencies[character] = 0;
			}
		
		 characterFrequencies[character] += 1;
	}
  return characterFrequencies;
}

function updateMaximumFrequencies(frequencies, maximumFrequencies) {
	const characters = {};
	for(const character in frequencies) {
		const frequence = frequencies[character]
		
		if(character in maximumFrequencies) {
			maximumFrequencies[character] = Math.max(frequence,maximumFrequencies[character])
		} else {
			maximumFrequencies[character] = frequence;
		}
	}
}

function makeArrayFromCharacterFrequencies(characterFrequencies) {
	const characters = [];
	
	for(const character in characterFrequencies) {
		const frequency = characterFrequencies[character];
		
		for(let idx = 0; idx < frequency; idx++) {
			characters.push(character)
		}
	}
	return characters;
}
