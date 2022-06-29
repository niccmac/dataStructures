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
  length() {
    return this.tail - this.head;
  }
}

const line = new Queue();

for (let i = 0; i < 7; i++) {
  line.enqueue(i);
}
console.log(line.peek());
console.log(line.length());
console.log(line);
