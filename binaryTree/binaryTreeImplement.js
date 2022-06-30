class TreeNode {
  constructor(data) {
    this.data;
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
}
