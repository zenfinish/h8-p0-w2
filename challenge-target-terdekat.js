function targetTerdekat(arr) {
    // you can only write your code here!
    var posisiO = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            posisiO = i;
            break;
        }
    }

    var posisiX = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'x') {
            posisiX.push(i);
        }
    }

    var cari = 0;
    var posisiTerdekat = [];
    for(var i = 0; i < posisiX.length; i++) {
        if(posisiX[i] - posisiO < 0) {
            cari = posisiO - posisiX[i];
        }else{
            cari = posisiX[i] - posisiO;
        }
        posisiTerdekat.push(cari);
    }
    posisiTerdekat.sort(function(value1, value2) { return value1 > value2 });
    
    if(posisiTerdekat[0] === undefined) {
        posisiTerdekat[0] = 0;
    }

    return posisiTerdekat[0];
}

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2