// Binary Search Trees!
// left < parent < right

const Queue = require("./queue")
const Stack = require("./stack")

class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.descendants = []
    this.parent = null
    this.meta = {}
  }

  // Get the left descendant, which is position 0 of this.descendants
  get left() {
    return this.descendants[0]
  }

  // Set the left descendant (pos 0) and set it's parent to "this" if it is defined
  set left(node) {
    this.descendants[0] = node
    if (node) node.parent = this
  }

  // Get the right descendant, which is position 1 of this.descendants
  get right() {
    return this.descendants[1]
  }

  // Set the right descendant (pos 1) and set it's parent to "this" if it is defined
  set right(node) {
    this.descendants[1] = node
    if (node) node.parent = this
  }

  toString(indent, shouldStringify=true) {
    let json = { value: this.value, left: this.left ? this.left.toString(indent, false) : undefined, right: this.right ? this.right.toString(indent, false) : undefined }
    if (!shouldStringify) return json
    return JSON.stringify(json, null, indent)
  }
}

class BinaryTree {
  constructor() {
    this.root = null
    this.size = 0
  }

  // Add a new node, following these rules:
  //  0. If the tree is empty, become the root
  //  1. If the node is higher than its parent, go right
  //  2. If the node is less that its parent, go left
  //  3. If they are equal, increase the multiplicity
  add(value) {
    const newNode = new BinaryTreeNode(value)
    if (this.root) {
      const { found, parent } = this.findNodeAndParent(value)
      if (found) {
        // duplicated: value already exist on the tree
        found.meta.multiplicity = (found.meta.multiplicity || 1) + 1
      } else if (value < parent.value) {
        parent.left = newNode
      } else {
        parent.right = newNode
      }
    } else {
      this.root = newNode
    }

    this.size += 1
    return newNode
  }

  // Remove a node by value, using these rules:
  //  1. If the node has no children, remove it.
  //  2. If the node has 1 child, that child moves
  //     up to replace the removed node.
  //  3. If the node has 2 children, the larger one
  //     moves up, and the smaller one becomes its child.
  //     This could happen a different way, as long as
  //     left < parent < right.
  //  4. Make sure to change the root if it was removed.
  remove(value) {
    const nodeToRemove = this.findNodeAndParent(value).found
    if (!nodeToRemove) return false

    // Combine left and right children into one subtree without nodeToRemove
    const nodeToRemoveChildren = this.combineLeftIntoRightSubtree(nodeToRemove)

    if (nodeToRemove.meta.multiplicity && nodeToRemove.meta.multiplicity > 1) {
      nodeToRemove.meta.multiplicity -= 1 // handle duplicated
    } else if (nodeToRemove === this.root) {
      // Replace root node to delete with the combined subtree.
      this.root = nodeToRemoveChildren
      this.root.parent = null // clearing up old parent
    } else {
      const side = nodeToRemove.isParentLeftChild ? "left" : "right"
      const { parent } = nodeToRemove
      // Replace node to delete with the combined subtree.
      parent[side] = nodeToRemoveChildren
    }
    this.size -= 1
    return true
  }

  // Traverse the tree in order (left, parent, right)
  // Start at the node passed, as an argument, or at the root
  *inOrderTraversal(node = this.root) {
    if (node.left) {
      yield* this.inOrderTraversal(node.left)
    }
    yield node
    if (node.right) {
      yield* this.inOrderTraversal(node.right)
    }
  }

  // Traverse the tree as left, right, parent
  // Start at the node passed, as an argument, or at the root
  *postOrderTraversal(node = this.root) {
    if (node.left) {
      yield* this.postOrderTraversal(node.left)
    }
    if (node.right) {
      yield* this.postOrderTraversal(node.right)
    }
    yield node
  }

  // Traverse the tree as parent, left, right
  // Start at the node passed, as an argument, or at the root
  *preOrderTraversal(node = this.root) {
    yield node
    if (node.left) {
      yield* this.postOrderTraversal(node.left)
    }
    if (node.right) {
      yield* this.postOrderTraversal(node.right)
    }
  }

  // A Depth First Search, using a stack
  // start at the root or a given node
  *dfs(startNode = this.root) {
    const stack = new Stack()
    stack.add(startNode)

    while (!stack.isEmpty()) {
      const node = stack.remove()
      yield node
      // Reverse the descendants so the left will be removed before the right
      node.descendants.reverse().forEach(child => stack.add(child))
    }
  }

  // A Breadth First Search, using a queue
  // start at the root or a given node
  *bfs(startNode = this.root) {
    const queue = new Queue()
    queue.add(this.root)

    while (!queue.isEmpty()) {
      const node = queue.remove()
      yield node
      node.descendants.forEach(child => queue.add(child))
    }
  }

  // Find a node (and its parent) with a certain value
  findNodeAndParent(value) {
    let node = this.root
    let parent

    while (node) {
      if (node.value === value) {
        break
      }
      parent = node
      node = value >= node.value ? node.right : node.left
    }

    return { found: node, parent }
  }

  // Combine left and right subtrees
  combineLeftIntoRightSubtree(node) {
    if (node.right) {
      const leftmost = this.getLeftmost(node.right)
      leftmost.left = node.left
      return node.right
    }
    return node.left
  }

  // Return a string representation of the tree
  toString(indent = null) {
    if (!this.root) return JSON.stringify({ root: null }, null, indent)
    return JSON.stringify({ root: this.root.toString(indent, false)}, null, indent)
  }

  // Convert the tree into an object for simplicity in viewing.
  toObject() {
    return JSON.parse(this.toString())
  }
}

module.exports = BinaryTree
