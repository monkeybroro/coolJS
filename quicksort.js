function quicksort(arr, start, end) {
    if (arr.length <= 1) return arr;
    var index = getPivotIndex(arr, start, end);
    if (start < index - 1) quicksort(arr, start, index - 1);
    if (end > index) quicksort(arr, index, end);
    return arr;
}

function getPivotIndex(arr, i, j) {
    var pivot = arr[Math.floor((i + j)/2)];
    while (i < j) {
        while (arr[i] < pivot) { i += 1; }
        while (arr[j] > pivot) { j -= 1; }
        if (i < j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    return i;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var test = [5, 0, 6, 7, 4, 6];
console.log('before sort:');
console.log(test);
quicksort(test, 0, test.length - 1);
console.log('after sort:');
console.log(test);

