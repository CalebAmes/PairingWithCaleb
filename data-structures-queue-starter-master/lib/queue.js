// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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

class Queue {
	constructor(length = 0) {
		this.back = null;
		this.front = null;
		this.length = length;
	}

	enqueue(val) {
		//creating a new method enqueue passing in val
		let newBack = new Node(val);
		let oldBack = this.back;
    
		this.back = newBack;
		newBack.next = oldBack;
    
		if (this.length == 0) this.front = newBack;
		if (this.length == 1) this.front.next = newBack;
    
    return ++this.length;
	}
  
	dequeue() {
    
		return --this.length;
	}

	size() {
		return this.length;
	}
}
const potato = new Queue();

potato.enqueue('fries');
potato.enqueue('mashed potatos');
potato.enqueue('tater tots');
potato.enqueue('hash browns');
potato.enqueue('gnocchi')

console.log(potato);

exports.Node = Node;
exports.Queue = Queue;
