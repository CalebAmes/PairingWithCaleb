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
		// this.store = new Array();
		this.top = null;
	}

	push(val) {
		let prevTop = this.top; // B
		let newTop = new Node(val); // C
		this.top = newTop; // sets to C
		newTop.next = prevTop; // sets C's next value to B

		return ++this.length;
	}

	pop() {
		if (this.length === 0) return null;

		let oldTop = this.top;
		let newTop = oldTop.next;
		// console.log(newTop)
		this.top = newTop;
		// let  = new Node()

		// console.log(newTop)

		// console.log(newTop);

		--this.length;
		return oldTop.value;
	}

	size() {
		return this.length;
	}
}

const newArr = new Stack();
newArr.push(1);
newArr.push(52);
newArr.push(3);
newArr.push(17);
newArr.pop();
newArr;

exports.Node = Node;
exports.Stack = Stack;
