//Give a non empty string of lowercase letters and non-negative integer
// a representing key, write function that returns a new string obtaining
//by shifting every letter in the input string k positions in the aplphaphet, where k is key.

function caesarCipherEncryptor(string, key) {
    let newLetter = [];
    let newKey = key % 26;

    for(const letter of string) {
        newLetter.push(getNewLetter(letter, newKey))
    }

    let result = newLetter.join("");
    return result;
}

caesarCipherEncryptor('xyz', 2) //zab

function getNewLetter(letter, key) {
    let newLetterCode = String.charCodeAt(letter) + key;

    if(newLetterCode <= 122) {
        return String.fromCharCode(newLetterCode)
    } else {
        return String.fromCharCode(96 + (newLetterCode % 122));
    }
}