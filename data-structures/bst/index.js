class BinarySearchTree {
  /**
   * 
   *  5
   * / \ 
   *2   3
   / \   \
  4   6   7
   *     
   *      
   */
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    let binaryTree = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = binaryTree;
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = binaryTree;
      }
    }
  }
  contains(value) {
    if (this.value === value) {
      return true;
    } else {
      if (this.right) {
        this.right.contains(value);
      }
      if (this.left) {
        this.left.contains(value);
      }
    }
    if (this.right === null && this.left === null) {
      return false;
    }
  }
}

module.exports = BinarySearchTree