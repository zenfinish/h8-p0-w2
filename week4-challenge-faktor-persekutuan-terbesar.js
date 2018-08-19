/*
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {
  // you can only write your code here!
  var fkAngka1Arr=[];
  var fkAngka2Arr=[];



  for(var i=1;i<angka1+1;i++){
    if(angka1 % i===0){
      fkAngka1Arr.push(i);
    }
  }

  for(var i=1;i<angka2+1;i++){
    if(angka2 % i===0){
      fkAngka2Arr.push(i);
    }
  }

  for(var i=0;i<fkAngka1Arr.length;i++){
    for(var j=0;j<fkAngka1Arr.length-1;j++){
      if(fkAngka1Arr[j]<fkAngka1Arr[j+1]){
        var temp=fkAngka1Arr[j]
        fkAngka1Arr[j]=fkAngka1Arr[j+1]
        fkAngka1Arr[j+1]=temp
      }
    }
  }
 
  for(var i=0;i<fkAngka2Arr.length;i++){
    for(var j=0;j<fkAngka2Arr.length-1;j++){
      if(fkAngka2Arr[j]<fkAngka2Arr[j+1]){
        var temp=fkAngka2Arr[j]
        fkAngka2Arr[j]=fkAngka2Arr[j+1]
        fkAngka2Arr[j+1]=temp
      }
    }
 }

 for(var i=0;i<fkAngka1Arr.length;i++){
   for(var j=0; j<fkAngka2Arr.length;j++){
    if(fkAngka1Arr[i]===fkAngka2Arr[j]){
      return fkAngka1Arr[i];
    }
   }
 }
 return "tidak ditemukan"
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1