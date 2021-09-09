'use strict';
const {Node}=require('./challenge-18');

const {K_aryTree}=require('./challenge-18');
const {Queue}=require('./challenge-18');

let test =new Node(1);
// console.log(test,';;;;;;;;;;')


describe('With the Binary Tree constructor class', () => {

    var tree = new K_aryTree(1);
    tree.root.children.push(new Node(3));
    tree.root.children[0].parent = tree;
    tree.root.children.push(new Node(5));
    tree.root.children[1].parent = tree;
    tree.root.children.push(new Node(7));
    tree.root.children[2].parent = tree;
    tree.root.children[0].children.push(new Node(15));
    tree.root.children[0].children[0].parent = tree.root.children[0];
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[0].children[1].parent = tree.root.children[0];
    tree.fizzBuzzTree();

    it('It should replace values divisible by 3 with "Fizz"', () => {
        expect(tree.root.children[0].value).toBe('Fizz');
    });


    it('It should replace values divisible by 5 with "Buzz"', () => {
        expect(tree.root.children[1].value).toBe('Buzz');
    });


    it('It should replace values divisible by 3 and 5 with "FizzBuzz"', () => {
        expect(tree.root.children[0].children[0].value).toBe('FizzBuzz');
        expect(tree.root.children[0].children[1].value).toBe('FizzBuzz');
    });


    it('It should turn the value into a string if the value is not divisiable by 3 and/or 5', () => {
        expect(tree.root.value).toBe('1');
        expect(tree.root.children[2].value).toBe('7');
    });

});