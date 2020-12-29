// View the full problem and run the test cases at:
//  https://leetcode.com/problems/delete-node-in-a-bst/

// key is the target node we need to delete
//  if key has no children (is leaf) -> then just delete it
//  if key only has one child, then replace key with child
//  if key has 2 children, go right one, then all the way to the left (until null)
//    replace target node val with current node val
//    call delete on current node



function deleteNode(root, key) {
  let surfer = root;
  let parent = null;
  while ((surfer !== null) && (surfer.val !== key)) {
    parent = surfer;
    if (key > surfer.val) surfer = surfer.right
    else surfer = surfer.left
  }
  if (surfer === null) return root

  //double child deletion
  if (surfer.left !== null && surfer.right !== null) {
    let currentNode = surfer.right;
    let currentNodeParent = surfer
    while (currentNode.left !== null) {
      currentNodeParent = currentNode
      currentNode = currentNode.left;
    }
    surfer.val = currentNode.val

    simpleDeletion(currentNode, currentNodeParent, root)
  } else simpleDeletion(surfer, parent, root);


  //Root specific
  if (root.val === key) {
    if (root.left === null && root.right === null) root = null
    else if (root.left === null) root = root.right
    else if (root.right === null) root = root.left
  }

  return root
}

let simpleDeletion = (surfer, parent) => {
  //leaf deletion
  if (surfer.right === null && surfer.left === null) {
    if (parent === null) {
      root = null
      return true
    }
    if (parent.right == surfer) parent.right = null;
    else parent.left = null;
    return true;
  }

  //single child deletion
  if (surfer.right === null) {
    if (parent === null) {
      root = root.left
      return true
    }
    if (parent.right === surfer) parent.right = surfer.left;
    else parent.left = surfer.left;
    return true;
  }
  if (surfer.left === null) {
    if (parent === null) {
      root = root.right
      return true
    }
    if (parent.right === surfer) parent.right = surfer.right;
    else parent.left = surfer.right;
    return true;
  }

  return false
}
