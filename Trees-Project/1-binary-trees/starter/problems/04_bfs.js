//first add the root to the queue
//add the value of the root into the array
//enqueue the child of the root node
//dequeue the first ele
//push first ele into the array
//enqueue left then right
//loop over this until the queue is empty
  //while loop while queue !empty
//if null, skip
// class TreeNode {
//   constructor(val) {
//       this.val = val
//       this.left = null
//       this.right = null
//   }
// }

function bfs(root) {
  if(root === null) return [];
  let queue = [root];
  let res = [];
  while(queue.length > 0){
    let currentNode = queue.shift();

    res.push(currentNode.val);
    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);

  }
  return res;
}

// function constructBalancedTree(){
//   let a = new TreeNode('a');
//   let b = new TreeNode('b');
//   let c = new TreeNode('c');
//   let d = new TreeNode('d');
//   let e = new TreeNode('e');
//   let f = new TreeNode('f');
//   let g = new TreeNode('g');
  
//   a.left = b;
//   a.right = c;
//   b.left = d;
//   b.right = e;
//   c.left = f;
//   c.right = g;

//   return a;
// }

// console.log(bfs(constructBalancedTree()))

module.exports = { bfs };
