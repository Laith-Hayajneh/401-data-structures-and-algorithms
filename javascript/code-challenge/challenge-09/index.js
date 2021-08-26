'use strcit';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }
    toString() {
        let nodeString = "";
        let current = this.head;
        while (current) {
            nodeString += `{${current.value}} -> `;
            current = current.next;
            if (current == null) {
                nodeString += `NULL`;
            }
        }
        return nodeString;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;

        return this;
    }
}


function reverse(ll) {
    let current = ll.head;
    let y = new LinkedList();
    
    while (current) {
        let temp = y.head //temp =1
        y.head = new Node(current.value);//1
        y.head.next = temp; //ne
        current = current.next;
    }
    return y
}

let x = new LinkedList()
x.append(1);
x.append(2);
x.append(3);
x.append(4);
let rev=reverse(x);
console.log(rev.toString())

console.log(x.toString())
module.exports = LinkedList;