# Data Structures

![Linked List](https://raw.githubusercontent.com/niccmac/dataStructures/main/public/img/linked-list-concept.webp)

## Linked Lists ...

- is a linear data structure that uses series of connected nodes.
- data is not stored in a particular memory location or index, each node stores the data and the address of the next node.
- elements are linked using these pointers.
- the first node is known as the head.
- the final node is identified as its node pointer data will be null.

### Disadvantages...

- to add, remove existing elements in a linked list items have to be shifted - this is a costly activity.
- \*\*\* DONT UNDERSTAND YET - The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
- to find data nodes are accessed sequentially starting from the first node, this process can be slow.
- more memory than arrays because of the storage of the pointers.

### Advantages...

- size is dynamic and can be changed in runtime.

### Types of linked lists

- Singly Linked Lists: One node contains only one pointer to the next node.
- Doubly Linked Lists: One node contains a pointer to the next node and a pointer to the previous node.
- Circular Linked Lists: The final node in the list points back to another node in the list, creating a loop.

Source

- <https://www.programiz.com/dsa/linked-list>
- <https://javascript.plainenglish.io/cycle-detection-in-javascrip-5173792a1ded>
- <https://www.geeksforgeeks.org/data-structures/linked-list/>
- <https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/>
- <https://www.geeksforgeeks.org/javascript-program-for-deleting-a-linked-list-node-at-a-given-position/?ref=rp>
