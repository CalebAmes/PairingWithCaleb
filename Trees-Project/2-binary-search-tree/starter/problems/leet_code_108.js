// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


//take in array
//set the middle val to be root node of BST
// split the array around the pivot
//  left and right
//  add the middle of the left arr to the BST
//  add the middle of the right arr to the BST
//  repeat

// if

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


// @param {number[]} nums
// @return {TreeNode}
class arrayToBST {
  constructor() {

  }
}

let sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null

  let middleIdx = Math.round(nums.length / 2) - 1
  let middle = nums[middleIdx]

  let left = sortedArrayToBST(nums.slice(0, middleIdx))
  let right = sortedArrayToBST(nums.slice(middleIdx + 1))

  let newNode = new TreeNode(middle, left, right)

  return newNode
};

let arr = [-10, -3, 0, 5, 9]
sortedArrayToBST(arr)
