class Queue {
  constructor() {
    this.list = []
  }

  // Return a boolean, whether the queue is empty or not
  isEmpty() {
    return this.list.length === 0
  }

  // Look at the element at the front without removing it
  peek() {
    if (this.isEmpty()) return null
    return this.list[0]
  }

  // Add an item to the queue
  add(item) {
    this.list.push(item)
  }

  // Take the first item from the queue
  remove() {
    return this.list.pop(0)
  }

  // Iterate through the queue
  *[Symbol.iterator]() {
    while (this.length > 0) {
      yield this.take()
    }
  }

  // Return a string representation of the queue
  toString() {
    return this.list.toString()
  }
}

module.exports = Queue
