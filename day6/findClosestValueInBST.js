//O(log(n)) time O(1) space
//Wtite function that takes in Binary Search Tree(BST) and a target integer value and return the closest 
//value to the target value contained in the BST

function findClosestValueInBST(tree, target) {
    return findClosestValueInBSTHelper(tree, target, tree.value)
}
function findClosestValueInBSTHelper(tree, target, closest) {
    if(tree === null) return closest;

    if(Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    } 
    if(target < tree.value) {
        return findClosestValueInBSTHelper(tree.left, target, closest)
    }
    else if(target > tree.value) {
        return findClosestValueInBSTHelper(tree.right, target, closest)
    }
    else {
        return closest;
    }
}

class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.rigth = null
    }
}