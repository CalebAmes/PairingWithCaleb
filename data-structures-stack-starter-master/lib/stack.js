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

  push(val) { 
    let prevTop = this.top;  // B 
    let newTop = new Node(val); // C
    this.top = newTop; // sets to C
    newTop.next = prevTop; // sets C's next value to B
    this.store.push(newTop); // stores C
    
    return ++this.length;  
  }

  pop() {
    if(this.length === 0) return null;
    if(this.length === 1) this.top = null;

    let newTop = new Node();
    let prevTop = this.top;
    this.top = prevTop;

    let something = this.store.pop()

    console.log(newTop);


    let lastEl = this.store.pop()
    --this.length;
    return lastEl;
    // this.top = topEl.previous;
  }

  size() {
    return this.length
  }



}

const newArr = new Stack();
newArr.push(1);
newArr.push(52);
newArr.pop()
console.log(newArr);

exports.Node = Node;
exports.Stack = Stack;
