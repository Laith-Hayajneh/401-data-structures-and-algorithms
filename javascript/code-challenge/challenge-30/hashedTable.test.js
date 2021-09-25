"use strict";

const HashTable = require("./hashTable");

describe(" Hash Table Class Checking", () => {
  test("should create a Hash Table with the givin size", () => {
    const size = 50;
    let hashTable = new HashTable(size);
    expect(hashTable.map.length).toEqual(size);
  });

  test("should add a new key/value pair successfully", () => {
    let bucket = {
      key: "LAITH",
      value: "HAYAJNEH",
    };
    let hashTable = new HashTable(50);
    hashTable.add(bucket);
    let index = hashTable.hash(bucket.key);
    expect(hashTable.map[index].head.value.value).toEqual(bucket.value);
  });

  test("should get the vlaue for specific key", () => {
    let bucket = {
      key: "LAITH",
      value: "HAYAJNEH",
    };
    let hashTable = new HashTable(50);
    hashTable.add(bucket);
    expect(hashTable.get("something")).toBeNull();
    expect(hashTable.get(bucket.key)).toEqual(bucket.value);
  });

  test("should Successfully handle a collision within the hashtable ", () => {
    let bucket1 = { key: "Allie", value: "Kid 2" };
    let bucket2 = { key: "Justin", value: "Student" };
    let hashTable = new HashTable(50);
    hashTable.add(bucket1);
    hashTable.add(bucket2);
    let index1 = hashTable.hash(bucket1.key);
    let index2 = hashTable.hash(bucket2.key);
    expect(index1).toStrictEqual(index2);
    expect(hashTable.get(bucket1.key)).toEqual(bucket1.value);
    expect(hashTable.get(bucket2.key)).toEqual(bucket2.value);
  });

  test("should return true if a key exists and false if it doesn't", () => {
    let hashTable = new HashTable(50);

    let bucket1 = { key: "Cathy", value: "The Real Boss" };
    let bucket2 = { key: "Allie", value: "Kid 2" }; //
    let bucket3 = { key: "Cat", value: "TA" };
    let bucket4 = { key: "Justin", value: "Student" }; //

    hashTable.add(bucket1);
    hashTable.add(bucket2);
    hashTable.add(bucket3);
    hashTable.add(bucket4);

    expect(hashTable.contain(bucket1.key)).toBe(true);
    expect(hashTable.contain(bucket2.key)).toBe(true);
    expect(hashTable.contain(bucket3.key)).toBe(true);
    expect(hashTable.contain(bucket4.key)).toBe(true);

    expect(hashTable.contain('anythingElse')).toBe(false);
  });
});