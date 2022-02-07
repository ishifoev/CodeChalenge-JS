//Write function that takes in sorted array of integers as well as targe integer.
//O(log(n)) time O(1) space
function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1);
}

binarySearch([0, 1,22,33,45,46,61,71,72,73], 33)//Answer 3 

function binarySearchHelper(array, target, left, right) {
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);

        let potencialMatch = array[middle];

        if(target === potencialMatch) {
            return middle;
        } else if(target < potencialMatch) {
            right = middle - 1
        } else {
            left = middle + 1;
        }
    }
    return - 1;
}