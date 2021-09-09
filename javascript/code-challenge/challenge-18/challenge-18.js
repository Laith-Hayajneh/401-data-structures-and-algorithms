
'use strict';

class Queue {
    constructor() { this.storage = new Array(); }

    enqueue(item) { this.storage.push(item); }

    dequeue() { return this.storage.shift(); }

    peek() { return this.storage[0]; }

    isEmpty() {
        if (this.peek() === undefined) { return true; }
        else return false;
    }

}

class Node {
    constructor(value, parent = null, children = []) {
        this.value = value;
        this.parent = parent;
        this.children = children;
    }
}

class K_aryTree {
    constructor(value) {
        var node = new Node(value);
        this.root = node;
    }

    fizzBuzzTree() {
        var currentNode = this.root;
        var queue = new Queue();
        while (currentNode && currentNode.children) {
            for (let i = 0; i < currentNode.children.length; i++) {
                queue.enqueue(currentNode.children[i]);
            }
            if (currentNode.value % 15 === 0) {
                currentNode.value = 'FizzBuzz';
            } else if (currentNode.value % 5 === 0) {
                currentNode.value = 'Buzz';
            } else if (currentNode.value % 3 === 0) {
                currentNode.value = 'Fizz';
            } else {
                currentNode.value = String(currentNode.value);
            }
            currentNode = queue.dequeue();
        }
        return this;
    }

}
 module.exports={
     Node:Node,
     K_aryTree:K_aryTree,
     Queue:Queue
 }