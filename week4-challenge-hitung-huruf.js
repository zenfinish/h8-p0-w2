/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
  var kataBaru =[];

  //1. split
  var temp=''
  for (var i = 0; i < kata.length; i++) {
    if(kata[i]===' '){
      kataBaru.push(temp);
      temp=''
    }
    else{
      temp=temp+kata[i]
    }
  }
  kataBaru.push(temp);

  //2.hitungjumlahperulangan
  var jumlah=[];
  for(var i=0; i<kataBaru.length;i++){
    var temp=0;
    for(var j=0;j<kataBaru[i].length;j++){
      for(var k=0;k<kataBaru[i].length;k++){
        if(kataBaru[i][j]===kataBaru[i][k] && j !== k ){
          temp=temp+1
        }
      }
    }
    jumlah.push(temp/2);
  }
  console.log(jumlah);

  //3. mecari indeks maks
  var maks=jumlah[0]
  var index=0;
  for(var i=1;i<jumlah.length;i++){
    if(jumlah[i]>maks){
      maks=jumlah[i]
      index=i
    }
  }
  
  return kataBaru[index];

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau