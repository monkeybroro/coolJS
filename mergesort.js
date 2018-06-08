function mergesort(arr, start, end) {
    if(start >= end) return [arr[start]];
    var mid = Math.floor((start+end)/2);
    var left = mergesort(arr, start, mid);
    var right = mergesort(arr, mid + 1, end);
    return merge(left, right);
}

function merge(left, right) {
    var res = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) res.push(left.shift());
        else res.push(right.shift());
    }
    while(left.length) {
        res.push(left.shift());
    }
    while(right.length) {
        res.push(right.shift());
    }
    return res;
}

var test = [5, 0, 6, 7, 4, 6, 3, 1, 2];
console.log('before sort:');
console.log(test);
var res = mergesort(test, 0, test.length - 1);
console.log('after sort:');
console.log(res);


