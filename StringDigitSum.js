var str1 = '123x1z13', str2 = 'a123';
var reg = /[A-Za-z]/;
str1 = str1.split(reg).join("");
str2 = str2.split(reg).join("");
console.log(parseInt(str1, 10) + parseInt(str2, 10));