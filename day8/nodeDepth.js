//The distance between a node in a Binary tree 
//and the trees called the node's depth

class BinaryTree {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

function nodesDepth(root) {
    let sumOfDepth = 0;

    let stack = [{ node: root, depth: 0}];

    while(stack.length > 0) {
        const {node, depth} = stack.pop();

        sumOfDepth += depth

        stack.push({node: node.left, depth: depth + 1})
        stack.push({node: node.right, depth: depth + 1})
    }
    return sumOfDepth;
}