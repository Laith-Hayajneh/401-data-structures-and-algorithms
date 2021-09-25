'use strict';
const LinkedList = require('./linkedList');

// creating the hashtable 

class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);

    }
    // adding to the linked list 
    add(bucket) {      // equle to add ()
        // let hash = this.hash(key);

        let index = this.hash(bucket.key);
        if (!this.map[index]) {
            // console.log('in the map')
            this.map[index] = new LinkedList()
        }
        // we need to make sure the key is unique
        // let bucket = { [key]: value };
        // this.map[hash].LinkedList.add(bucket)
        this.map[index].add(bucket)
    };

    get(key) {  //return data associated with that key
        let index = this.hash(key);
        // console.log('in get ',index)


        // let target = this.map[index].head.value.key;
        let target = this.map[index];
        // console.log('abo al7',target)
        if (!target) {
            // if empty will return null
            return null
        }
        let current = target.head;
        // console.log(current,'current >>>>')

        while (current) {
            // console.log('sssssssssssss')
            if (current.value.key == key) {
                // console.log(current.value.key,'valluuuue')
                return current.value.value

            }
            current = current.next;
        }

    }
    contain(key) {     //Returns: Boolean, indicating if the key exists in the table already.
        // console.log('laith contain>>>',this.get(key))
        if (this.get(key)) {
            // console.log('current88888888888888888 >>>>')

            return true
        }
        // console.log(key,'contain >>>>')

        return false
    }
    ;

    //making the hash
    hash(key) {
        // console.log('hash running>>',key)
        let hash = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        // console.log('hash>>>',hash )
        return hash;
    }


 




}


let myhash = new HashTable(50);


// //////

// myhash.add({ key: "John", value: "Boss" });
// myhash.add({ key: "Cathy", value: "The Real Boss" });
// myhash.add({ key: "Zach", value: "Kid 1" });
// myhash.add({ key: "Allie", value: "Kid 2" }); //
// myhash.add({ key: "Rosie", value: "Dog" });
// myhash.add({ key: "Cat", value: "TA" });
// myhash.add({ key: "Justin", value: "Student" }); // 
// myhash.add({ key: "Jason", value: "Student" });
// myhash.add({ key: "Ben", value: "Student" });
// myhash.add({ key: "Timea", value: "Student" });
// myhash.add({ key: "Jen", value: "Student" });
// myhash.add({ key: "Khalil", value: "Student" });
// myhash.add({ key: "Michael", value: "Student" });
// myhash.add({ key: "Ovi", value: "Student" });

// let bucket1 = { key: "Cathy", value: "The Real Boss" };
// myhash.add(bucket1)
// myhash.contain(bucket1)




// myhash.map.forEach((data, i) => {
//     console.log(i, data );
// });

module.exports=HashTable