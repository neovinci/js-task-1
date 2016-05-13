/**
 * Created by Sergei Astapenko on 13.05.2016.
 */
var data = ";key,value;key1,value;key3,value3;";
var parseData = data.split(";");
var output = {};

for(var i = 0; i < parseData.length; i++) {
    var key = parseData[i].split(",")[0];
    var value = parseData[i].split(",")[1];

    if(key && value) {
        output[key] = value;
    }
}
console.log(output);