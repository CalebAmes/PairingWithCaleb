// we are going to recursivly call ever brach of a Tree
// we are increasing our currentHeight which will give us the hight of each branch

// we need a way to capture the currentHeight each time and compare it to the max height

// get height is 

//      a
//   b     c
// d   e f    h



function getHeight(root, currentHeight = 0) {
  if (root === null) return currentHeight -1;
  
  let left = getHeight(root.left, currentHeight + 1);
  let right = getHeight(root.right, currentHeight + 1);

  if(left > right) return left;
  else return right;

  // return currentHeight;
}


module.exports = {
  getHeight
};
