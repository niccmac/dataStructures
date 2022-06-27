//https://javascript.plainenglish.io/cycle-detection-in-javascrip-5173792a1ded
//Given head, the head of a linked list, determine if the linked list has a cycle in it.

//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

//Return true if there is a cycle in the linked list. Otherwise, return false.

const hasCycle = function (head) {
  let set = new Set();
  let current = head;

  while (current) {
    if (set.has(current)) {
      return true;
    } else {
      set.add(current);
    }

    current = current.next;
  }
  return false;
};
