// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// const { getHeight } = require('./getHeight');

// function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }

// let createTree = (arr, root = null) => {
//   // let left = arr[1];
//   // let right = arr[2];

//   while(arr.length > 0){
//     if(arr[0] !== undefined) let currentNode = arr[0];
//     if(arr[1] !== undefined) let left = arr[1];
//     if(arr[2] !== undefined) let right = arr[2];

//   }

//   let root;

//   // if(arr[0] !== undefined) root = new TreeNode (arr[0]);

//   // if(arr[1] !== undefined) root.left = arr[1];

//   // if(arr[2] !== undefined) root.right = arr[2];

//   createTree(arr.slice(2))
// }

// function getHeight(root, currentHeight = 0) {
//   if (root === null) return currentHeight -1;

//   let left = getHeight(root.left, currentHeight + 1);
//   let right = getHeight(root.right, currentHeight + 1);

//   if(left > right) return left;
//   else return right;
// }

// let isBalanced = function(root, currentHeight = 0) {
//   if(root == null) return true;

//   let left = getHeight(root.left, currentHeight +1);
//   let right = getHeight(root.right, currentHeight +1);

//   if(Math.abs(left - right) > 1) return false;

//   let leftBal = isBalanced(left, currentHeight +1);
//   let rightBal = isBalanced(right, currentHeight +1);

//   return rightBal && leftBal
// };
let arrTrue = [3, 9, 20, null, null, 15, 7]
let arrFalse = [1, 2, 2, 3, 3, null, null, 4, 4]

let isBalanced = function (root) {
  let length = root.length

  let n = 0
  let a = 2
  while (n < length) {
    n += a
    a *= 2
  }
  n -= (a / 2)

  let test = root.slice(n)
  if (test.includes(null) && length > n) return false
  return true
}

console.log(isBalanced(arrFalse))






// return
