// O(n) time O(1) space
//Given non empty arrays write functions that determines the second array is a subsequence 
//of the first one
function isValidateSubsequense(array, sequence) {
   let seqIdx = 0;
   let arrayIdx = 0;

   while(arrayIdx < array.length && seqIdx < sequence.length) {
       if(array[arrayIdx] === sequence[seqIdx]) seqIdx += 1

       arrayIdx += 1
   }
   return seqIdx === sequence.length;
}
isValidateSubsequense([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
//Answer will be return TRUE