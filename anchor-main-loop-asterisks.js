// 1. Menyusun Barisan Bintang
    var rows1 = 5;
    while (rows1 >= 1){
        console.log("*");
        rows1--;
    }

    console.log("");

// 2. Menyusun Barisan Bintang Dengan Nested Looping
    var rows2 = 5;
    var bintang = "";
    for (var i = rows2; i >= 1; i--){
        while (rows2 >= 1){
            bintang = bintang+"*";
            rows2--;
        }
        console.log(bintang);
    }

    console.log("");

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
    var rows3 = 5;
    var bintang = "";
    for (var i = rows3; i >= 1; i--){
        while (rows3 >= i){
            bintang = bintang+"*";
            rows3--;
        }
        console.log(bintang);
    }