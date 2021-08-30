'use strict';

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    //insert

    insertFirsta(data){
        this.head=new Node (data,this.head);
    }



    // insert last data

    insertLast (data){
        let node =new Node(data)

    }



    // get at index


    // print the list we will print the data
    printList(){
        current=this.head;
        while (current) {
            console.log(current.data);
            current=current.next
            
        }
    }



}

const ll =new LinkedList ();
ll.insertFirsta(100);
console.log(ll)