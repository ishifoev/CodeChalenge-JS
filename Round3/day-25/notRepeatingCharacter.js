//O(n) time | O(1) space
//Write a function that takes in a string of lowercase English-alphabet letters
//and return index of the string first non-repeating character. 
function findFirstNonRepeatingCharacter(string) {
    const characterFrequencies = {};

    for(let character of string) {
        if(!(character in characterFrequencies)) characterFrequencies[character] = 0;

        characterFrequencies[character] = 1;
    }

    for(let i = 0; i < string.length; i++) {
        const firstCharacter = string[i];

        if(characterFrequencies[firstCharacter] === 1) return i
    }
    return -1;
}