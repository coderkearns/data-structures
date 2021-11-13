// A Hash table implementation

class HashTable {
    constructor(size=127) {
        this.table = new Array(size)
    }

    get size() {
        return this.table.length;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = key.charCodeAt(i)
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value]
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index]
    }

    remove(key) {
        const index = this._hash(key);
        
        // Make sure it exists and is an array with elements
        if (this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            return true
        }
        return false
    }

    has(key) {
        const index = this._hash(key);
        return this.table[index] && this.table[index].length
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length) {
                keys.push(this.table[i][0])
            }
        }
        return keys
    }

    values() {
        const values = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length) {
                values.push(this.table[i][1])
            }
        }
        return values
    }

    clear() {
        this.table = [];
    }


    isEmpty() {
        return this.table.length === 0
    }

    toString() {
        return this.table.toString()
    }
}