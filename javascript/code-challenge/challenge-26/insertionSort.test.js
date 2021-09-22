
'use strict';
const insertionSort=require('./insertionSort');
describe(" insertion Function Checking", () => {
  test("check if the insertion is correct", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    insertionSort(arr);
    expect(arr).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
  
});