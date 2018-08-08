function balikString(nilai){
    var i = nilai.length - 1;
    var tampil = '';
    while (i >= 0){
        tampil = tampil + nilai[i];
        i--;
    }
    console.log(tampil);
}

balikString('Hello World --');