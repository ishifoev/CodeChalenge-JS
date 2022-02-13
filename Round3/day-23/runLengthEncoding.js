//Write function that takes non empty string and returns it's run length encoding
function runLengthEncoding(string) {
    // Write your code here.
  let newArray = [];
  let currentTrackLength = 1;
  
  for(let i = 1; i < string.length; i++) {
  let currentValue = string[i];
  let previousValue = string[i - 1];
  
  if(currentValue !== previousValue || currentTrackLength === 9) {
  newArray.push(currentTrackLength.toString());
  newArray.push(previousValue);
  currentTrackLength = 0;
  }
  currentTrackLength += 1;
  }
  newArray.push(currentTrackLength.toString());
  newArray.push(string[string.length - 1]);
  
  let result = newArray.join("");
  return result;
  }
  
  