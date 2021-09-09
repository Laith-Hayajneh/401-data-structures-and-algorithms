'use strict';
const Node =require('./node');
const Stack =require('./stack');
const PseudoQueue=require('./pseudoQueue');

let newQueue =new PseudoQueue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log(newQueue.dequeue());
console.log(newQueue.enqueue(4));
