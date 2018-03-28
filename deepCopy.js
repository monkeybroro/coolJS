var deepCopy = function(obj1, obj2){
    obj1 = obj1 || {};
    for (var i in obj2) {
        if(obj2.hasOwnProperty(i)) {
            if (typeof(obj2[i]) == 'object'){
                obj1[i] = Array.isArray(obj2[i]) ? [] : {};
                deepCopy(obj1[i], obj2[i]);
            }
            else obj1[i] = obj2[i];
        }
    }
}
