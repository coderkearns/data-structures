# data-structures

A collection of some data structures, written in javascript, mostly for education purposes.

## Queue
A simple queue, first-in-first-out. More explanations in comments. See [queue.js](https://github.com/coderkearns/data-structures/blob/master/queue.js) for more.

```javascript
let queue = new Queue();
queue.add("a")
queue.add("b")
queue.add("c")

queue.peek() // "a"
queue.length // 3
queue.isEmpty() // false

queue.remove() // "a"

queue.add("d")
queue.add("e")
for (let item in queue) {
  console.log(item)
}
// b
// c
// d
// e
```

## Stack
A simple stack, first-in-last-out.
Explained in comments in [stack.js](https://github.com/coderkearns/data-structures/blob/master/stack.js).

```javascript
let stack = new Stack()
stack.add("a")
stack.add("b")
stack.add("c")

stack.peek() // "c"
stack.length // 3
stack.isEmpty() // false

stack.remove() // "c"

queue.add("d")
queue.add("e")
for (let item in queue) {
  console.log(item)
}
// e
// d
// b
// a
```

## LinkedList
A linked list, where each item is a *node* which contains data and a link to the next item. As always, more details in the code: [linked-list.js](https://github.com/coderkearns/data-structures/blob/master/linked-list.js).

```javascript
let linkedList = new LinkedList()
linkedList.insertAtBeginning("a")
linkedList.insertAtEnd("b")
linkedList.insertAll(["c", "d", 1, 2])
linkedList.insertAt(3, {some: ["other", "data"]})

console.log(linkedList.toString())
// ["a"] -> ["b"] -> ["c"] -> [{"some":["other","data"]}] -> ["d"] -> [1] -> [2] -> null

linkedList.deleteHead()
linkedList.deleteTail()
linkedList.deleteAt(2)

console.log(linkedList.toString())
// ["b"] -> ["c"] -> ["d"] -> [1] -> null

linkedList.get(1) // "c"
linkedList.clear()

console.log(linkedList.toString())
// null
```

## BinaryTree
A binary search tree, which uses both [Queue](#queue) and [Stack](#stack). It always follows this pattern: *left < parent < right*. Code at [binary-tree.js](https://github.com/coderkearns/data-structures/blob/master/binary-tree.js)
```javascript
let binaryTree = new BinaryTree()
binaryTree.add(5)
binaryTree.add(4)
binaryTree.add(6)
binaryTree.add(2)
binaryTree.add(1)
binaryTree.add(7)
binaryTree.add(8)

/*
      5
     / \
    4   6
   /     \
  2       7
 /         \
1           8
*/

binaryTree.toObject() === {
  root: {
    value: 5,
    left: {
      value: 4,
      left: {
        value: 2,
        left: { value: 1 }
      }
    },
    right: {
      value: 6,
      right: {
        value: 7,
        right: { value: 8 }
      }
    }
  }
}

```