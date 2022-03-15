class Queue {
	constructor() {
		this.size = 0;
		this.items = [];
	}
	enqueue(element) {
		this.items.push(element);
		this.size += 1;
	}
	dequeue() {
		let firstItem = this.items.shift();
		this.size -= 1;
		return firstItem;
	}
}

module.exports = Queue