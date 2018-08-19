/*
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
*/

function ubahHuruf(kata) {
  // you can only write your code here!

  var kamus = 'abcdefghijklmnopqrstuvwxyz';
  var tampil = '';
  for(var i = 0; i < kata.length; i++) {
    if(kata[i] === 'z') {
      tampil = tampil + 'a';
    }else{
      for(var j = 0; j < kamus.length; j++) {
        if(kata[i] === kamus[j]) {
          tampil = tampil + kamus[j + 1];
        }
      }
    }
  }

  return tampil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu