'use strict';

function mergeSort(arr) {
    const len = arr.length;

    if (len > 1) {
        const mid = Math.floor(len / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        // console.log(arr)
        return merge(mergeSort(left), mergeSort(right));
    } else {
        return arr;
    }
}


function merge(left, right) {
    let i = 0;
    let j = 0;
    let arr = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }
// console.log(arr,'dddd')
    return arr.concat(left.slice(i)).concat(right.slice(j));
}

// let array = [8, 4, 23, 42, 16, 15];

// mergeSort(array)
module.exports = mergeSort;