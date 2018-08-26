/*

Buatlah pola bilangan berikut menggunakan rekursif,
tidak usah buat function

54321
5432
543
54
5


321
32
3

*/
function urut(data) {
  var tmp = '';
  var pasti = data;
  
  function baris(dBaris) {
    if(dBaris !== 0) {
      
      function kolom(dKolom) {
        if(dKolom !== pasti - dBaris) {
          tmp += dKolom;
          return kolom(dKolom - 1);
        }
      }
      kolom(pasti);

      if(dBaris !== 1) {
        tmp += '\n';
      }
      return baris(dBaris - 1);
    }
  }
  baris(data);

  return tmp;
}

console.log(urut(5));