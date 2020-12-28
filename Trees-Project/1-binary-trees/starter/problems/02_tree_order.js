function preOrderArray(root) {
  if (root === null) return [];

  let result = [];
  result.push(root.val)

  result = result.concat(preOrderArray(root.left));
  
  result = result.concat(preOrderArray(root.right));
  return result;
}

function inOrderArray(root) {
  if(root === null) return [];

  let result = [];
  // console.log(root.left, `\n`, root.val)
  result = result.concat(inOrderArray(root.left));
  result.push(root.val);
  result = result.concat(inOrderArray(root.right));

  return result;
}

function postOrderArray(root) {
  if(root === null) return [];

  let result = [];

  result = result.concat(postOrderArray(root.left));
  result = result.concat(postOrderArray(root.right));
  result.push(root.val);

  return result;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
