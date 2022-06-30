class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    if (!this.root) {
      this.root = new TreeNode(data);
    } else {
      let current = this.root;
      while (current) {
        if (current.data < data) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new TreeNode(data);
            break;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new TreeNode(data);
            break;
          }
        }
      }
    }
  }

  printInOrder() {
    if (!this.root) {
      console.log("Tree is empty!");
    } else {
      this.inOrderTraversal(this.root);
    }
  }

  inOrderTraversal(node) {
    // This traversal uses recursion
    // console.log(node);
    if (node.left) {
      this.inOrderTraversal(node.left);
    }
    console.log(node.data);
    if (node.right) {
      this.inOrderTraversal(node.right);
    }
  }
}

const tree = new Tree();
tree.printInOrder();
tree.addNode(1);
tree.addNode(0);
tree.addNode(57);
tree.addNode(4);
tree.printInOrder();
