class GraphNode {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class Graph {
    constructor() {
        this.nodes = []
        this.map = {}
        this.index = 0
    }

    addNode(value) {
        let key = this.index++
        this.nodes[key] = new GraphNode(key, value)
        this.map[key] = []
        return this.map[key]
    }

    addEdge(node1, node2) {
        this.map[node1.key].push(node2.key)
        this.map[node2.key].push(node1.key)
    }

    findNode(value) {
        for (let node of this.nodes) {
            if (node.value === value) {
                return node
            }
        }
        return null
    }

    // Create an adjacency object
    toObject() {
        let adj = {}
        for (let node of this.nodes) {
            adj[node.key] = this.map[node.key]
        }
        return adj
    }
}

/*

This works using two structures:

In the graph:
 a   b - c
/| \______/
V

Adjecency map:
{
    a: ["a", "c"],
    b: ["c"],
    c: ["a", "b"]
}

Implementation:
nodes = {
    1: a,
    2: b,
    3: c
}
map = {
    1: [1, 3],
    2: [3].
    3: [1, 2]
}


*/