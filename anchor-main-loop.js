// 1. Melakukan Looping Menggunakan While
    console.log("LOOPING PERTAMA");
    var i = 2;
    while (i <= 20){
        console.log(i+" - I love coding");
        i+=2;
    }

    console.log("");

    console.log("LOOPING KEDUA");
    var i = 20;
    while (i >= 2){
        console.log(i+" - I will become fullstack developer");
        i-=2;
    }

    console.log("");

// 2. Melakukan Looping Menggunakan For
    console.log("LOOPING PERTAMA");    
    for (var i = 1; i <= 20; i++){
        console.log(i+" - I love coding");
    }

    console.log("");

    console.log("LOOPING KEDUA");    
    for (var i = 20; i >= 1; i--){
        console.log(i+" - I will become fullstack developer");
    }

    console.log("");

// 3. Angka Ganjil dan Genap
    for (var i = 1; i <= 100; i++){
        if((i%2) === 0){
            console.log("GENAP");
        }else{
            console.log("GANJIL");
        }
    }

    console.log("");

    for (var i = 1; i <= 100; i+=2){
        if((i%3) === 0){
            console.log(i+" kelipatan 3");
        }else{
            console.log("");
        }
    }

    for (var i = 1; i <= 100; i+=5){
        if((i%6) === 0){
            console.log(i+" kelipatan 6");
        }else{
            console.log("");
        }
    }

    for (var i = 1; i <= 100; i+=9){
        if((i%10) === 0){
            console.log(i+" kelipatan 10");
        }else{
            console.log("");
        }
    }