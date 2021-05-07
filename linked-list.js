class ListNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }

  // A string represention of a list node
  toString() {
    if (!this.next) {
      return `[${JSON.stringify(this.data)}] -> null`
    }
    return `[${JSON.stringify(this.data)}] -> ${this.next.toString()}`
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // Check if the linked list is empty
  isEmpty() {
    return !this.head
  }

  // Check how long the list is
  get length() {
    let len = 0
    let node = this.head
    while (node) {
      len += 1
      node = node.next
    }
    return len
  }

  // Insert a new node at the beginning.
  insertAtBeginning(data) {
    let newNode = new ListNode(data)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }

  // Insert a new node at the very end of the list.
  insertAtEnd(data) {
    let newNode = new ListNode(data)

    // If there are no items in the list, set the head to the new node.
    if (this.isEmpty()) {
      this.head = newNode
      return this.head
    }

    // If not, find the tail and set its next to the new node.
    let tail = this.head
    while (tail.next !== null) {
      tail = tail.next
    }
    tail.next = newNode

    return newNode
  }

  // A helper to insert each item in a list at the end
  insertAll(list) {
    for (let item of list) this.insertAtEnd(item)
  }

  // Insert a new node at a specified index
  insertAt(index, data) {
    // If the list is empty, set the head to data
    if (this.isEmpty()) {
      this.head = new ListNode(data)
      return this.newNode
    }

    // If index is 0, insert the data before the head
    if (index === 0) {
      this.head = new ListNode(data, this.head)
      return this.head
    }

    // Otherwise, use "get()" to get the previous node, and change according "next" values
    const previous = this.get(index - 1)
    let newNode = new ListNode(data, previous.next)
    previous.next = newNode

    return newNode
  }

  // Delete the first item
  deleteHead() {
    if (this.isEmpty()) return null
    this.head = this.head.next
    return this.head
  }

  // Delete the last item
  deleteTail() {
    // If empty return null
    if (!this.head) return null

    // If there is only the head
    if (!this.head.next) {
      this.head = null
      return
    }

    // Loop through, and change the "next" value of the second-to-last to null, thus deleting the next
    let previous = this.head
    let tail = this.head.next

    while (tail.next !== null) {
      previous = tail
      tail = tail.next
    }

    previous.next = null

    // Return the new last item
    return previous
  }

  // Delete an item at the specified index
  deleteAt(index) {
    // If empty, return null
    if (this.isEmpty()) return null

    // If the index is 0, delete the head
    if (index === 0) {
      this.head = this.head.next
      return
    }

    // Otherwise, use "get()" to get the previous node
    const previous = this.get(index - 1)

    // Do nothing if the previous or the current index does not exist
    if (!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next

    // Just return the head when done
    return this.head
  }

  // Clear the whole list by removing the head
  clear() {
    this.head = null
  }

  // get the node at a specified index
  get(index) {
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  // Return a string representation of the linked list
  toString() {
    if (!this.head) return "[null]"
    return this.head.toString()
  }
}

module.exports = LinkedList
