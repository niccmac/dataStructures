// Create class for nodes of list
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create class for list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // Size of linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  // Makes head equal null, no start means no list
  clear() {
    this.head = null;
  }

  // returns final node of list
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  // returns first item in list
  getFirst() {
    return this.head;
  }
}

// Create nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(7);
let node4 = new ListNode(12);

// Link nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Set node1 as head
let list = new LinkedList(node1);

// Delete nodes
const delNode = (position, list) => {
  // no list return
  if (list.head === null) {
    return;
  }
  let temp = list.head;

  // if first node in list make next node head
  if (position === 0) {
    list.head = list.next;
    return;
  }

  // Find node before node to be deleted
  for (let i = 0; temp !== 0 && i < position - 1; i++) {
    temp = temp.next;
  }
  if (temp === null || temp.next === null) return;
  let next = temp.next.next;

  // Unlink the deleted node from list
  temp.next = next;
};

// console.log(list.head.next.data);
console.log(list.size());
delNode(2, list);
console.log(list.size());
// console.log(list.getLast());
// console.log(list.getFirst());
