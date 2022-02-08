//Write function that takes in array of integers and returns a sorted version of that array. Use the bubble sort
//algoritm to sort array

function bubbleSort(array) {
  // Write your code here.
let isSorted = false;
let counter = 0;
    while(!isSorted) {
    isSorted = true;
        for(let i = 0; i < array.length - 1 - counter; i++) {
                if(array[i] > array[i + 1]) {
                swap(i, i + 1, array)
                isSorted = false
                }
        }
    counter += 1;
}
return array;
}
bubbleSort([8, 5, 2, 9, 5, 6, 3])//[2, 3, 5, 5, 6, 8 , 9]
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

