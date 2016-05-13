/**
 * Created by Sergei Astapenko on 13.05.2016.
 */
var str = "Some string";
console.log("isEndsWith: " + str.endsWith("ing"));
console.log("isStartsWith: " + str.startsWith("Some"));
console.log(reverse(str));

function reverse(str) {
    return str.split("").reverse().join("");
}


