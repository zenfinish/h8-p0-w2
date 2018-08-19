var data = 'X0X0XXX0XXOX0X0X';
var temp = [];
var count = 0;

for(var i = 0; i < Math.sqrt(data.length); i++) {
    temp.push([]);
    for(var j = 0; j < Math.sqrt(data.length); j++) {
        temp[i].push(data[count]);
        count++;
    }
}

console.log(temp);