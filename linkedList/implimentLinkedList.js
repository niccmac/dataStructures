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
}

// Create nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);

// Link nodes
node1.next = node2;

// Set node1 as head
let list = new LinkedList(node1);

console.log(list.head.next.data);
console.log(list.size());
