// Class stack
class Queue {
  //Create queue.
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  // Add elements to queue.
  enqueue(elem) {
    this.elements[this.tail] = elem;
    this.tail++;
  }
  // Remove element from queue and return it.
  dequeue() {
    const removed = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return removed;
  }
  // Look at first element in queue.
  peek() {
    return this.elements[this.head];
  }
  // check length of queue
  get length() {
    return this.tail - this.head;
  }
}
