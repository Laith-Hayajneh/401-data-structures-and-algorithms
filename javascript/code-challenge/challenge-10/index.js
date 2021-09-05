'use strict';
const Node =require('./node');
const Stack =require("./stack");
const Queue=require("./queue");
const {linkedList}=require("./linkedList");

let newStack=new Stack();
newStack.push(1);
newStack.push(3);
newStack.push(3);
newStack.push(4);
console.log(newStack.top.value)

let newQueue=new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log(newQueue.front.value);

module.exports={linkedList}


