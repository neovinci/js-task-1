/**
 * Created by Sergei Astapenko on 13.05.2016.
 */
var str = 'Pascal_Case';

if(isPascalCase(str)) {
    console.log('It is a Pascal_Case!');
} else {
    console.log('It is not a Pascal_Case!');
}

function isPascalCase(str) {
    var reg = /\b([A-Z][a-z]*)\b/;
    var strArray = str.split('_');
    var isTrue = true;

    for(var i = 0; i < strArray.length; i++ ) {
        isTrue = (strArray[i].search(reg) === 0);

        if(isTrue === false) {
            break;
        }
    }
    return isTrue;
}