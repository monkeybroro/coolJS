//ES 6 way
var removeDuplicates = function (arr) {
    return [...new Set(arr)];
}

//ES 5 way
var removeDuplicatesES5 =function (arr) {
    return arr.filter(function(ele, index, arr){
        return index === arr.indexOf(ele);
    })
}
