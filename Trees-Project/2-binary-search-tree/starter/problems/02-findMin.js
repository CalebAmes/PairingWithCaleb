function findMin(root) {
  if(root == null) return null;
  if(root.left == null) return root;
  else return findMin(root.left);
}


module.exports = {
  findMin
};