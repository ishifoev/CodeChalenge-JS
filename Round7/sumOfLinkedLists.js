class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
	let newLinkedListHeadPointer = new LinkedList(0);
	let currentNode = newLinkedListHeadPointer;
	let carry = 0;
	let nodeOne = linkedListOne;
	let nodeTwo = linkedListTwo;
	while(nodeOne !== null || nodeTwo !== null || carry !== 0) {
		let valueOne = nodeOne !== null ? nodeOne.value: 0;
		let valueTwo = nodeTwo !== null ? nodeTwo.value: 0;
		let sumOfValues = valueOne + valueTwo + carry;
		
		let newValue = sumOfValues % 10;
		let newNode = new LinkedList(newValue);
		currentNode.next = newNode;
		currentNode = newNode;
		
		carry = Math.floor(sumOfValues / 10);
		nodeOne = nodeOne !== null ? nodeOne.next: null;
		nodeTwo = nodeTwo !== null ? nodeTwo.next: null;
	}
  return newLinkedListHeadPointer.next;
}
