/**
 * Created by Sergei Astapenko on 13.05.2016.
 */

var a = [1, 13, 0, 2, 1, 5, 9, 15, -1, 33];
console.log("Insert sort:\n"  + a + "\n" + insertSort(a));

a = [1, 14, 0, 7, 1, 45, 9, 15, -1, 33];
console.log("Quick sort:\n"  + a + "\n"  + quickSort(a, 0, a.length - 1));

a = [1, 13, 0, 2, 1, 1, 9, 5, -1, -33];
console.log("Merge sort:\n"  + a + "\n"  + mergeSort(a, 0, a.length - 1));

a = [1, 13, 0, 22, 1, -5, 9, 15, -1, 33];
console.log("Bubble sort:\n"  + a + "\n"  + bubbleSort(a));

a = [1, -13, 0, 62, 1, 5, 9, 15, -1, 33];
console.log("shellSort:\n"  + a + "\n"  + shellSort(a));

a = [1, 138, 0, -2, 1, 5, 9, 15, -1, 33];
console.log("countingSort:\n"  + a + "\n"  + countingSort(a));



function insertSort(a) {
    var value;
    for(var i = 1; i < a.length; i++) {
        value = a[i];
        for (var j = i - 1; j >= 0 && a[j] > value; j--) {
            a[j + 1] = a[j];
        }
        a[j + 1] = value;
    }
    return a;
}


function quickSort(a, first, last) {
    var i = first, j = last, x = a[parseInt((first + last) / 2)];
    do {
        while (a[i] < x) i++;
        while (a[j] > x) j--;

        if(i <= j) {

            if (i < j) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
            i++;
            j--;
        }
    } while (i <= j);
    if (i < last)
        quickSort(a, i, last);
    if (first < j)
        quickSort(a, first, j);
    return a;
}


function mergeSort(a, low, high)	{
    var mid;

    if(low < high) {
        mid = parseInt((low + high) / 2);
        mergeSort(a, low, mid);
        mergeSort(a, mid + 1, high);
        merge(a, low, mid, high);
    }
    return a;
}

function merge(a, low, mid, high) {
    var b = [];
    var h = low, i = 0, j = mid+1;

    while((h <= mid) && (j <= high)) {

        if(a[h] <= a[j]) {
            b[i] = a[h];
            h++;
        }	else {
            b[i]=a[j];
            j++;
        }
        i++;
    }

    if(h > mid) {
        for(var k = j; k <= high; k++) {
            b[i] = a[k];
            i++;
        }
    }	else {
        for(k = h; k <= mid; k++) {
            b[i] = a[k];
            i++;
        }
    }

    for(k = 0; k <= high - low; k++) {
        a[k + low] = b[k];
    }
}


function bubbleSort(a) {
    for (var i = a.length; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (a[j] > a[j+1]) {
                var tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }
    return a;
}

function shellSort (a) {
    for (var x = a.length; x = parseInt(x / 2);) {
        for (var i = x; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= x && k < a[j - x]; j -= x)
                a[j] = a[j - x];
            a[j] = k;
        }
    }
    return a;
}

function countingSort(a) {
    var i, j, k;
    var min = a[0];
    var max = a[0];

    for(i = 0; i < a.length; i++) {
        if (min > a[i])
            min = a[i];
        else if (max < a[i])
            max = a[i];
    }
    var counts = [];
    var newarray = [];

    for(i = 0; i < max - min + 1; i++) {
        counts[i] = 0;
    }

    for(i = 0; i < a.length; i++) {
        counts[a[i] - min]++;
    }
    k = 0;

    for(i = 0; i < counts.length; i++) {
        for(j = 0; j < counts[i]; j++) {
            newarray[k++] = i + min;
        }
    }
    return newarray;
}