# Data Structures

![Linked List](https://raw.githubusercontent.com/niccmac/dataStructures/main/public/img/linked-list-concept.webp)

## Linked Lists

- is a linear data structure that uses series of connected nodes.
- data is not stored in a particular memory location or index, each node stores the data and the address of the next node.
- elements are linked using these pointers.
- the first node is known as the head.
- the final node is identified as its node pointer data will be null.

### Disadvantages...

- to add, remove existing elements in a linked list items have to be shifted - this is a costly activity.
- to find data nodes are accessed sequentially starting from the first node, this process can be slow.
- more memory than arrays because of the storage of the pointers.

### Advantages...

- size is dynamic and can be changed in runtime. Unlike an array, which no matter the size will take up a preset amount of memory. Using pointers linked lists split up the data into managable packets.
  ![memory usage](https://github.com/niccmac/dataStructures/blob/main/public/img/Untitled%20Diagram.drawio.png)

### Types of linked lists

- Singly Linked Lists: One node contains only one pointer to the next node.
- Doubly Linked Lists: One node contains a pointer to the next node and a pointer to the previous node.
- Circular Linked Lists: The final node in the list points back to another node in the list, creating a loop.

## Stack

![Stack eg.](https://raw.githubusercontent.com/niccmac/dataStructures/main/public/img/st73hnavf3vbeitow7ln.webp)

- is an elementary data structure.
- last item in is the first item out, or first in last out.
- data is stored in a particular index.
- used for

### Disadvantages...

- to add, remove existing elements in a linked list items have to be shifted - this is a costly activity.
- to find data nodes are accessed sequentially starting from the first node, this process can be slow.
- more memory than arrays because of the storage of the pointers.

### Advantages...

- size is dynamic and can be changed in runtime.

### Types of stacks

- Array.
- Object.
- memory/undo - Last In First Out.
- queue - First In First Out.

Source

- <https://www.programiz.com/dsa/linked-list>
- <https://javascript.plainenglish.io/cycle-detection-in-javascrip-5173792a1ded>
- <https://www.geeksforgeeks.org/data-structures/linked-list/>
- <https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/>
- <https://www.geeksforgeeks.org/javascript-program-for-deleting-a-linked-list-node-at-a-given-position/?ref=rp>
- <https://medium.com/@_jmoller/javascript-data-structures-stacks-and-queues-ea877d72a5f9>
