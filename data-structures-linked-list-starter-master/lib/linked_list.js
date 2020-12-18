// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// TODO: Implement the addToTail method here
	addToTail(val) {
		let newNode = new Node(val); //D
		let oldTail = this.tail; //C

		if (!this.head) this.head = newNode;
		else oldTail.next = newNode;

		this.tail = newNode;
		this.length++;
		return this;
	}

	// TODO: Implement the removeTail method here
	removeTail() {
		if (!this.head) return undefined;
		let current = this.head; // A
		let newTail = current; // A
		while (current.next) {
			// B --> C
			newTail = current; // A --> B
			current = current.next; // B --> C
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
			this.head = null;
		}
		return current;
	}

	// TODO: Implement the addToHead method here
	addToHead(val) {
		let newNode = new Node(val);
		if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
        }
        this.length++;
         return this;
	}

	// TODO: Implement the removeHead method here
	removeHead() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0) this.tail = null;

        return currentHead;
    }

	// TODO: Implement the contains method here
	contains(target) {}

	// TODO: Implement the get method here
	get(index) {}

	// TODO: Implement the set method here
	set(index, val) {}

	// TODO: Implement the insert method here
	insert(index, val) {}

	// TODO: Implement the remove method here
	remove(index) {}

	// TODO: Implement the size method here
	size() {}
}

exports.Node = Node;
exports.LinkedList = LinkedList;
