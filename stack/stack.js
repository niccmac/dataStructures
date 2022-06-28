// Simple array stack FIFO
const stack = [];
const addToStack = (data, stack) => {
  stack.push(data);
};
const removeFromStack = (stack) => {
  stack.pop();
};
// addToStack(1, stack);
// console.log(stack);
// removeFromStack(stack);
// console.log(stack);

// Simple array stack queue FIFO
const queue = [0, 1, 2, 3];

const addToQueue = (data, queue) => {
  queue.push(data);
};
const removeFromQueue = (queue) => {
  queue.shift();
};
// addToQueue(4, queue);
// removeFromQueue(queue);
// console.log(queue);
