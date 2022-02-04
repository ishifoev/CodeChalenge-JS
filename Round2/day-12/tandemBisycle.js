//O(nlogn) time O(1) space

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
//O(nlog(n)) time O(1) space
redShirtSpeeds.sort((a, b) => a - b);
blueShirtSpeeds.sort((a, b) => a - b);

if(!fastest) reversePlaceInArray(redShirtSpeeds);

let totalSpeed = 0;

for(let i = 0; i < redShirtSpeeds.length; i++) {
let rider1 = redShirtSpeeds[i];
let rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];

totalSpeed += Math.max(rider1, rider2)
}
return totalSpeed
}

function reversePlaceInArray(array) {
let start = 0;
let end = array.length - 1;

while(start < end) {
const temp = array[start]
    array[start] =  array[end];
array[end] = temp;
start++;
end--;
}
}

