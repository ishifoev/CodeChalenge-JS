function moveElementToEnd(array, toMove) {
  // Write your code here.
	let left = 0;
	let right = array.length - 1;
	
	while(left < right) {
		while(left < right && array[right] === toMove) right--;
		if(array[left] === toMove) swap(left, right, array)
		left++
	} 
	return array;
}
function swap(left, right, array) {
		const temp = array[right];
		array[right] = array[left];
		array[left] = temp;
}
