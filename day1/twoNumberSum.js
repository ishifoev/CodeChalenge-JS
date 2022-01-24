//O(n^2) time O(1)space
//Write function that takes that distinct integers and integer of target sum.
function twoNumbersSum(array, target) {
   for(let i = 0; i < array.length - 1; i++) {
       let firstNum = array[i];

       for(let j = i + 1; j < array.length; j++) {
           let secondNum = array[j];

           if((firstNum + secondNum) === target) return [firstNum, secondNum]
       }
   }
   return [];
}
twoNumbersSum([3, 5, -4, 8,11, 1, -1, 6], 10);
//Answer will be in reverse order [-1, 11]