// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// preorder array[0] is our root
// // inorder everything left of root is left
// loop through the preorder array

// compare the index of i in the preorder to the parent

const { TreeNode } = require('./01_tree_node.js');
[1,4,2,3]
[1,2,3,4]
function buildTree(preorder, inorder) {
	if (preorder.length !== inorder.length || preorder.length == 0) return null;

	let root = new TreeNode(preorder[0]);

	for (let i = 1; i < preorder.length; i++) {
		let currentNode = new TreeNode(preorder[i]);
		let compareNode = root;
		let index = inorder.indexOf(preorder[i]);
		let compIndex = inorder.indexOf(compareNode.val);
		let parent;
		while (compareNode !== null) {
			parent = compareNode;
			if (index < compIndex) compareNode = compareNode.left;
			if (index > compIndex) compareNode = compareNode.right;
    }
    if(index < inorder.indexOf(parent.val)) parent.left = currentNode;
    else parent.right = currentNode;
  }
  return root;
}
