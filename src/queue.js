const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 * 
 * class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
} 
 */
class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.tail.next = new ListNode(value);
      this.last = this.last.next;
    }
    return ++this.size;
  }

  dequeue() {
    const current = this.first.value;
    this.first = this.first.next;
    this.size--;
    return current;
  }
}

module.exports = {
  Queue
};
