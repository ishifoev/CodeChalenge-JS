function selectionSort(array) {
    let currentIdx = 0;

    while(currentIdx < array.length - 1) {
        let smallestIdx = currentIdx;

        for(let i = smallestIdx + 1; i < array.length; i++) {
            if(array[smallestIdx] > array[i]) smallestIdx = i
        }
        swap(currentIdx, smallestIdx, array);
        currentIdx += 1;
    }
    return array;
}
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}