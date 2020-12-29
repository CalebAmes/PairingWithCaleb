// View the full problem and run the test cases at:
//  https://leetcode.com/problems/delete-node-in-a-bst/

// key is the target node we need to delete
//  if key has no children (is leaf) -> then just delete it
//  if key only has one child, then replace key with child
//  if key has 2 children, go right one, then all the way to the left (until null)
//    replace target node val with current node val
//    call delete on current node



function deleteNode(root, key) {
  let surfer = root
  while ((surfer.val !== key) && (surfer !== null)) {
    if (key > surfer.val) surfer = surfer.right
    else surfer = surfer.left

    // key is not in BST
    if (surfer === null) return false
  }

  if (surfer.right === null && surfer.left === null) {
    surfer = null
  }

  return false
}
