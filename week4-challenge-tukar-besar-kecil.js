/*
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
  // you can only write your code here!

  var kamus = 'abcdefghijklmnopqrstuvwxyz';
  var tampil = '';
  
  
  for(var i = 0; i < kalimat.length; i++) {
    var hitung = 0;
    for(var j = 0; j < kamus.length; j++) {
      
      if(kalimat[i] === kamus[j]) {
        tampil = tampil + kamus[j].toUpperCase();
      }else if(kalimat[i] === kamus[j].toUpperCase()) {
        tampil = tampil + kamus[j].toLowerCase();
      }

      if(kamus[j] === kalimat[i].toLowerCase()) {
        hitung += 1;
      }

    }
    if(hitung === 0) {
      tampil = tampil + kalimat[i];
    }
  }

  return tampil;
  
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"