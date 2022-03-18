class Node {
  // Your code here!
  constructor (value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

//Pending solution

// class LinkedList {
//   constructor () {
//     this.head = null;
//     this.tail = null;
//   }
//   addToTail() {
//     let node = new Node(this.value)
//     if (this.tail === null) {
//       this.tail = node;
//     } 
//     else {
//       let currentNode = node;
//       while (currentNode.next !== null) {
//         currentNode = current.next;
//       }
//       this.tail = currentNode;
//     }
//   }
// }

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addToHead (node) {

    const formerHead = this.head
    this.head = node;

    if (formerHead) {
      formerHead.previous = node
      node.next = formerHead
    } else {
      this.tail = node
    }
  }

  addToTail (node) {

    const formerTail = this.tail
    this.tail = node
    if (formerTail) {
      formerTail.next = node
      node.previous = formerTail
    } else {
      this.head = node
    }
  }


  removeTail () {
    const removedTail = this.tail
    if (!removedTail) return null
    if (removedTail.previous) {
      this.tail = removedTail.previous
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }
    return removedTail
  }

}

module.exports = {
  Node,
  LinkedList
}