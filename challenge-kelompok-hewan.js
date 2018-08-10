function groupAnimals(animals) {
    // you can only write your code here!
    var penampung = [];
    for(var i = 0; i < animals.length; i++) {
        penampung.push((animals[i])[0]);
    }

    var penampung2 = [penampung[0]];
    for(var i = 0; i < penampung.length; i++) {
        
        var temp = 0;
        for(var j = 0; j < penampung2.length; j++) {
            if(penampung[i] === penampung2[j]) {
                temp += 1;
            }
        }
        if(temp !== 1) {
            penampung2.push(penampung[i]);
        }

    }
    penampung2.sort(function(value1, value2) { return value1 > value2 });

    var tampil = [];
    for(var i = 0; i < penampung2.length; i++) {
        tampil.push([]);
        for(var j = 0; j < animals.length; j++) {
            if((animals[j])[0] === penampung2[i]) {
                tampil[i].push(animals[j]);
            }
        }
    }

    return tampil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]