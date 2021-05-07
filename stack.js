class Stack {
  constructor() {
    this.list = []
  }

  // Returns the number of items in the queue
  get length() {
    return this.list.length
  }

  // Return a boolean, whether the stack is empty or not
  isEmpty() {
    return this.length === 0
  }

  // Look at the element at the top without removing it
  peek() {
    if (this.isEmpty()) return null
    return this.list[this.length - 1]
  }

  // Add an item to the stack
  add(item) {
    this.list.push(item)
  }

  // Take the item at the top of the stack
  remove() {
    return this.list.pop(this.length - 1)
  }

  // Iterate through the stack
  *[Symbol.iterator]() {
    while (this.length > 0) {
      yield this.take()
    }
  }

  // Return a string representation of the stack
  toString() {
    return this.list.toString()
  }
}

module.exports = Stack
