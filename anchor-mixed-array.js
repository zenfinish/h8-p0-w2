var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 5, "Pria", "SMA Internasional Metro");
    console.log(input);

    var bulan = input[3].split("/")[1];
    switch(bulan) {
        case '01': { console.log('Januari'); break; }
        case '02': { console.log('Februari'); break; }
        case '03': { console.log('Maret'); break; }
        case '04': { console.log('April'); break; }
        case '05': { console.log('Mei'); break; }
        case '06': { console.log('Juni'); break; }
        case '07': { console.log('Juli'); break; }
        case '08': { console.log('Agustus'); break; }
        case '09': { console.log('September'); break; }
        case '10': { console.log('Oktober'); break; }
        case '11': { console.log('November'); break; }
        case '12': { console.log('Desember'); break; }
        default: { console.log('Masukkan Format Angka 01 s/d 12 Untuk Bulan'); }
    }

    var bulan = input[3].split("/");
    console.log(bulan.sort(function(value1, value2) { return Number(value1) < Number(value2) }));

    
}

dataHandling2(input);