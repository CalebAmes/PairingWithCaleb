function getHeight(root) {
  if (root === null) return -1

  let result = [];
  result.push(root.val)

  result = result.concat(getHeight(root.left));

  result = result.concat(getHeight(root.right));
  return result.length

}


module.exports = {
  getHeight
};
