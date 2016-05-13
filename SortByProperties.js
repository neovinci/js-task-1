/**
 * Created by Sergei Astapenko on 13.05.2016.
 */
// Input data
var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];
// Calling method
var res = objSort(arOfObj, 'desc');
console.log(res);

function objSort(array, method) {
    for (var i = array.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if(method === 'asc') {
                if (propertiesCount(array[j]) > propertiesCount(array[j + 1])) {
                    tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
            } else if(method === 'desc') {
                if (propertiesCount(array[j]) < propertiesCount(array[j + 1])) {
                    tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
            }
        }
    }
    return array;
}

function propertiesCount(obj) {
    var count = 0;
    for (var key in obj) {
        count++;
    }
    return count;
}