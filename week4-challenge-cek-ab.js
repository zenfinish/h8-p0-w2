/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function checkAB(num) {
  // you can only write your code here!
  var a = [];
  var b = [];
  for(var i = 0; i < num.length; i++) {
    if(num[i] === 'a') {
      a.push(i);
    }if(num[i] === 'b') {
      b.push(i);
    }
  }

  if(a.length === 0 || b.length === 0){
    return false;
  }

  for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < b.length; j++) {
      
      var jml = (a[i] - b[j]) - 1;
      if(jml < 0) {
        jml = (b[j] - a[i]) - 1;
      }
      if(jml === 3) {
        return true;
      }

    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false