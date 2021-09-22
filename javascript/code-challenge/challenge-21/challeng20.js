'use strict'
function mergSort(arr) {
    let n = arr.length;
    console.log(arr,'ll')
    if (n > 1) {
        const mid = n / 2;
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, n);

        mergSort(left);
        mergSort(right);
        mergSort(left, right, arr)

    };
    return arr
};

function merg(left, right, arr) {
    let i = 0;
    let j = 0
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i = i + 1
        } else {
            arr[k] = right[j];
            j = j + 1
        }
        k = k + 1

    };

    if (i = left.length) {
        arr.push(right[i])


    } else {
        arr.push(left[i])
    }


};

let array = [8, 4, 23, 42, 16, 15];

// mergSort(array)
// export { merg, mergSort }


export  {
    mergSort,
    merg
}