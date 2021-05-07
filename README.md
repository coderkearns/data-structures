# data-structures

A collection of some data structures, written in javascript, mostly for education purposes.

## Queue
A simple queue, first-in-first-out. More explanations in comments. See [queue.js](https://github.com/coderkearns/data-structures/blob/master/queue.js) for more.

```javascript
let queue = new Queue();
queue.add("a")
queue.add("b")
queue.add("c")

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
let linkedList = new LinkedList("a")
linkedList.insertAtBeginning("b")
linkedList.insertAtEnd("c")
linkedList.insertAll(["d", "e"]) {some: ["other", "data"]}
```