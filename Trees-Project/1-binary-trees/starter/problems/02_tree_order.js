function preOrderArray(root, result = []) {
  if (root === null) return

  result.push(root.val)

  preOrderArray(root.left, result)
  preOrderArray(root.right, result)
}

function inOrderArray(root) {

}

function postOrderArray(root) {

}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
