class Stack{
	constructor() {
		this.items = [];
		this.size = 0;
	}
	push(item) {
		this.items.push(item);
		this.size += 1
	}
	pop() {
		let lastItem = this.items.pop();
		this.size -= 1
		return lastItem;
	}
}

module.exports = Stack