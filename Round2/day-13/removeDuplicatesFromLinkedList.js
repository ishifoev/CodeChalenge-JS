class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;

    while(currentNode !== null) {
        let distictNode = currentNode.next;

        while(distictNode !== null && distictNode.value === currentNode.value) {
            distictNode = distictNode.next;
        }
        currentNode.next = distictNode;

        currentNode = distictNode;
        
    }
    return linkedList;
}