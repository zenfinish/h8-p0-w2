function boxNumber(nilai) {
    if (nilai%2 === 0){
        nilai = nilai - 1;
    }
    var tambah = '';
    for (var i = 1; i <= nilai; i++){
        var tambah1 = '';
        for (var j = 1; j <= (nilai-i) / 2; j++){
            tambah1 += ' ';
        }
        tambah += '*';
        if (i%2 === 1){
            console.log(tambah1+tambah);
        }
    }
}

boxNumber(7);