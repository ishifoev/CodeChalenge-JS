//Working with Minimum waiting time. You are give an non empty array of positive integers 
//representing an amount of time that specific queries take to execute.
//Only one query can be excecuted at a time, but the queries can't be executed in any order.

function minimumWaitingTime(queries) {
   let result = queries.sort(function(a, b) {
       return a - b
   })

   let totalTime = 0;

   for(let i = 0; i < result.length; i++) {
       const duration = result.length - (i + 1);

       totalTime += duration * result[i]
   }
   return totalTime;
}
minimumWaitingTime([3,2,1,2,6]) //Answer will be 17