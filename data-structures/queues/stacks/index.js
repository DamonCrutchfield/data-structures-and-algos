class Stack{
	constructor() {
		this.size = 0;
		this.items = [];
	}
	push(element) {
		this.items.push(element);
		this.size += 1;
	}
	pop() {
		let lastItem = this.items.pop();
		this.size -= 1;
		return lastItem;
	}
}

module.exports = Stack