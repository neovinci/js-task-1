/**
 * Created by Sergei Astapenko on 13.05.2016.
 */
var str = 'camelCase';

if(isCamelCase(str)) {
    console.log('It is a camelCase!');
} else {
    console.log('It is not a camelCase!');
}

function isCamelCase(str) {
    var reg = /\b([a-z][A-Z]*){2,}\b/;
    return (str.search(reg) === 0);
}