/*
    boxNumber(5);
    12321
    12321
    12321
    12321
    12321

    boxNumber(6);
    123321
    123321
    123321
    123321
    123321
    123321
*/

function boxNumber(nilai) {
    var ngulang = 1;
    var kata1 = Math.round(nilai / 2);
    while (ngulang <= nilai){
        var tampil = '';
        for (var i = 1; i <= kata1; i++){
            if (i%2 !== 0){
                tampil += i;
            }
        }
        if (nilai%2 !== 0){
            tampil += kata1;
        }
        for (var i = nilai - kata1; i >= 1; i--){
            if (i%2 !== 0){
                tampil += i;
            }
        }
        ngulang++;
        console.log(tampil);
    }
}

boxNumber(7);