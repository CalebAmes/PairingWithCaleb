class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    let newNode = new TreeNode(val)

    if (this.root === null) return this.root = newNode

    let parent = this.root;

    // let right = this.root.right
    // let left = this.root.left

    while (true) {
      if (newNode.val < parent.val) {
        if(parent.left == null) return parent.left = newNode;
        else parent = parent.left;
      }
      else {
        if(parent.right == null) return parent.right = newNode;
        else parent = parent.right;
      }
    }
  }

  searchRecur(val, root = this.root) {
    if(root == null) return false;
    if(root.val == val) return true;

    if(root.val < val) return this.searchRecur(val, root.right)
    else return this.searchRecur(val, root.left)
  }
}


let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);
console.log(tree.root.val);
console.log(tree.root.left.val)
console.log(tree.root.right.val);
console.log(tree.root.left.left.val)
console.log(tree.root.left.right.val)
console.log(tree.root.right.right.val);

module.exports = {
  TreeNode,
  BST
};
