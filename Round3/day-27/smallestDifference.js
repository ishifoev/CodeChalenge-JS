//Write function that takes not empty array of integers
//find the pair of numbers(one from each array) whoose absolute difference closest to  zero
// and returns array containing these two numbers.

function smallestDifferrence(arrayOne, arrayTwo) {

arrayOne.sort((a, b) => a - b);
 arrayTwo.sort((a, b) => a - b);
 let idxOne = 0;
 let idxTwo = 0;
 let smallest = Infinity;
 let current = Infinity;
 let smallestPair = [];
 while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
let firstNum = arrayOne[idxOne];
 let secondNum = arrayTwo[idxTwo];
 if (firstNum < secondNum) {
 current = secondNum - firstNum;
 idxOne++;
 } else if (secondNum < firstNum) {
 current = firstNum - secondNum;
 idxTwo++;
 } else {
 return [firstNum, secondNum];
 }
 if (smallest > current) {
 smallest = current;
 smallestPair = [firstNum, secondNum]
 }arrayOne.sort((a, b) => a - b);
 arrayTwo.sort((a, b) => a - b);
 let idxOne = 0;
 let idxTwo = 0;
 let smallest = Infinity;
 let current = Infinity;
 let smallestPair = [];
 while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
let firstNum = arrayOne[idxOne];
 let secondNum = arrayTwo[idxTwo];
 if (firstNum < secondNum) {
 current = secondNum - firstNum;
 idxOne++;
 } else if (secondNum < firstNum) {
 current = firstNum - secondNum;
 idxTwo++;
 } else {
 return [firstNum, secondNum];
 }
 if (smallest > current) {
 smallest = current;
 smallestPair = [firstNum, secondNum]
 }
}
 }
}