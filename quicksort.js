var quicksort = function(arr, start, end) {
    var pivot, pivotIndex;
    pivot = end;
    pivotIndex = partition(arr, pivot, start, end);
    if (start < pivotIndex - 1) quicksort(arr, start, pivotIndex - 1);
    if (end > pivotIndex + 1) quicksort(arr, pivotIndex + 1, end);
    return arr;
}

var partition = function(arr, pivot, start, end) {
    var pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] <= arr[pivot]) {
            swap(arr, i, pivotIndex);
            pivotIndex ++;
        }
    }
    swap(arr, i, pivotIndex);
    return pivotIndex;
}

var swap = function(arr, i, j) {
    if (i === j) return;
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var test = [5, 0, 6, 7, 4, 6, 3, 1, 2];
var test1 = [3, 1, 2, 4];
console.log('before sort:');
console.log(test1);
quicksort(test1, 0, test1.length - 1);
console.log('after sort:');
console.log(test1);
