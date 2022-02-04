//Write functions that takes is a not-empty array of integers that are sorted in
//ascending order and return new array of the same length with squares

function sortedSquareArray(array) {
    let newArray  = [];

    for(let i = 0; i < array.length; i++) {
       newArray.push(array[i]);
    }
    newArray.sort((a, b) => a - b);
    return newArray;
}
sortedSquareArray([1, 2, 3, 4, 5, 6, 7]);