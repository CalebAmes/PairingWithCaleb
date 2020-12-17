// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class Stack {
  constructor(length = 0) {
    this.length = length;
    this.store = new Array();
    this.top = this.store[0];
  }

  push(val) { // should accept a single input parameter
    let topEl = new Node(val); // should create a new node with the value provided as input
    this.top = topEl; // should reassign both the top pointer when a new node is added to the top of an empty stack
    this.store.push(topEl); 
    // topEl = this.head;
    const newTop = topEl.next
    return ++this.length;
  }

  pop() {}

  size() {}



}

const newArr = new Stack();
newArr.push(9);
newArr.push(1);
newArr.push(3);
console.log(newArr);

exports.Node = Node;
exports.Stack = Stack;
