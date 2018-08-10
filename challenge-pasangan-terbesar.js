function pasanganTerbesar(num) {
    // you can only write your code here!
    var arr = [];

    for(var i = 0; i <= String(num).length; i++) {
        arr.push(String(num).substr(i,2));
    }

    arr.sort(function(value1, value2) { return Number(value1) < Number(value2) });

    return Number(arr[0]);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
