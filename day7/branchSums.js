//Write functions, that takes in a Binary Tree and return
//list of it's branch sums ordered from leftmost branch sum 
//to rightmost branch sum 

class BinaryTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
function branchSum(root) {
  let sums = [];
  calculateBranchSum(root, 0, sums)
}
function calculateBranchSum(node, binarySum, sums) {
    if(!node) return;

    let result = binarySum + node.value;

    if(!node.left && !node.right) {
        sums.push(result)
    }

    calculateBranchSum(node.left, result, sums)

    calculateBranchSum(node.right, result, sums)
}
