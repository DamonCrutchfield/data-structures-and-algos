class Queue {
	constructor() {
		this.items = [];
		this.size = 0;
	}
	enqueue(element) {
		this.items.push(element);
		this.size += 1
	}
	dequeue() {
		let firstElement = this.items.shift();
		this.size -= 1
		return firstElement;
	}
}

module.exports = Queue