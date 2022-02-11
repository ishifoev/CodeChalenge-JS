//Write function that takes, non-empty string and returns a boolean representing whether
//a string is a palindrome.

function palindromeCheck(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;

    while(leftIdx < rightIdx) {
        if(string[leftIdx] !== string[rightIdx]) return false;

        leftIdx += 1;
        rightIdx -= 1;
    }
    return true;
}
palindromeCheck('abcdabc');//return true