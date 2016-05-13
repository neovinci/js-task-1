/**
 * Created by Sergei Astapenko on 13.05.2016.
 */
var squareArray = matrixArray(10, 10);

for(var i = 0; i < squareArray.length; i++) {
    console.log(squareArray[i]);
}

console.log("Max value: " + max(squareArray));
console.log("Min value: " + min(squareArray));
console.log("Avg value: " + avg(squareArray));

function matrixArray(rows, columns){
    var arr = [];
    for(var h = 0; h < columns; h++) {
        arr[h] = [];
        for(var k = 0; k < rows; k++){
            arr[h][k] = parseInt(Math.random() * 1000);
        }
    }
    return arr;
}

function max(array) {
    var maxArray = [];
    for(var i = 0; i < array.length; i++) {
        maxArray[i] = Math.max.apply(null, squareArray[i]);
    }
    return Math.max.apply(null, maxArray);
}

function min(array) {
    var minArray = [];
    for(var i = 0; i < array.length; i++) {
        minArray[i] = Math.min.apply(null, squareArray[i]);
    }
    return Math.min.apply(null, minArray);
}

function avg(array) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        count += array[i].length;
        for (var j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    return sum / count;
}