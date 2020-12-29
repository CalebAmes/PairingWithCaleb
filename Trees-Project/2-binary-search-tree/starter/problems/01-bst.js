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

    let right = this.root.right
    let left = this.root.left
    while (this.root !== null) {
      if (newNode > this.root.val) {
        if (right === null) right = newNode
        else right = this.root
      }
      else {
        if (this.root.left === null) this.root.left = newNode
        else this.root.left = this.root
      }

    }


  }

  searchRecur(val) {

  }
}

module.exports = {
  TreeNode,
  BST
};
