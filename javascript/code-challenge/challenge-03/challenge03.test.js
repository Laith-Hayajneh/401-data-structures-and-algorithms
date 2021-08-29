"use strict"
// [4, 8, 15, 16, 23, 42], 15          >>>> 	2
// [-131, -82, 0, 27, 42, 68, 179], 42 >>>>	    4
// [11, 22, 33, 44, 55, 66, 77], 90	   >>>>    -1


function binarySearch(arr, num) {
    let index;
  

    for (let r = 0; r < arr.length; r++) {
        if (arr[r] == num) {
            index = r;
            console.log(index, 'in the array')


        }
        if (index == null) {
            index = "not in the array"

        }

    }
    return index





}

//for test ::
binarySearch([2, 4, 6, -8], 4);


describe('Test challenge 03', () => {
    test('Should return a modified array ', () => {
        expect(binarySearch([2, 4, 6, -8], 6)).toStrictEqual(2);
        expect(binarySearch([42, 8, 15, 23, 42], 16)).toStrictEqual("not in the array");
    })
})