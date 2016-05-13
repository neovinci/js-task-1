var str1 = '123x1z13', str2 = 'a123';
var reg = /[G-Zg-z]/;
str1 = str1.split(reg).join("");
str2 = str2.split(reg).join("");
var res = sum(str1) + sum(str2);
console.log(res);

function sum(str){
    var sum = 0;
    for(var i = 0; i < str.length; i++) {
        sum += parseInt(str[i], 16);
    }
    return sum;
}