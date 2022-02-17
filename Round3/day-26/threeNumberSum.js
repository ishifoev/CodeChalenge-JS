///Write functions, that takes is non empty array of distinct 
//integers representing a target sum. 

// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  // Write your code here.
array.sort((a, b) => a - b);
let newArray = [];
for(let i = 0; i < array.length - 2; i++) {
let left = i + 1;
let right = array.length - 1;

while(left < right) {
let currentSum = array[i] + array[left] + array[right];

if(currentSum === targetSum) {
 newArray.push([array[i], array[left], array[right]])
 left ++;
 right --;
}
else if(currentSum < targetSum) {
left++;
}
 else if(currentSum > targetSum) {
right--;
}
}
}
return newArray;
}

