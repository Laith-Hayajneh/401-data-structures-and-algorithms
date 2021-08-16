'use strict';



/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Reverse Array
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
Example : 
We expect the result will be like that
  Input	                  Output
[1, 2, 3, 4, 5, 6]  	[6, 5, 4, 3, 2, 1]
[10 ,20 ,30 ,40 ,50 ,60] [60, 50 ,40 ,30 ,20 ,10]
------------------------------------------------------------------------------------------------ */


function arrayReverse(array){
    let result =[];
    for (let i = array.length - 1; i >=0; i--) {
        result.push(array[i])
    }
    return result;
}
// arrayReverse([1,1,2,1,2])

describe('Test for challenge 01',()=>{
    
    it('should return reversed array',()=>{
        expect(arrayReverse([1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1]);

        expect(arrayReverse([89, 2354, 3546, 23, 10, -923])).toEqual([-923, 10, 23, 3546, 2354, 89]);

    })
})
