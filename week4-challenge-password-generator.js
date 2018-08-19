/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

 1.   Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

 2.   Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

 3.   Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

 4.   Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
  //code di sini
  var vokalLower='aiueo'
  var vokalUpper=vokalLower.toUpperCase();
  var hasilDiubahLower='bjvfp'
  var hasilDiubahUpper=hasilDiubahLower.toUpperCase();

  if(str.length<5){
      return false;
  }
  else{
      var result='';
      for(var i=0;i<str.length;i++){
          var char=str[i]
          ketemu=false;
          for(var j=0;j<vokalLower.length;j++){
              //lower
              console.log(j)
              if(char===vokalLower[j]){
                  ketemu=true;
                  result=result+hasilDiubahLower[j]
                  break;
              }
              else if(char===vokalUpper[j]){
                  ketemu=true;
                  result=result+hasilDiubahUpper[j]
                  break;
              }
              else{
                  ketemu=false
              }
          }
          if(ketemu===false){
              result=result+str[i];
          }
      }
  }
  return result;
}

function reverseWord (str) {
  //code di sini
  result='';
  for(var i=str.length-1;i>=0;i--){
      result= result+str[i]
  }
  return result;
}

function setLowerUpperCase (str) {
  //code di sini
  console.log(str)
  var kamusLower='abcdefghijklmnopqrstuvwxyz'
  var kamusUpper=kamusLower.toUpperCase();
  var result=''
  for(var i=0;i<str.length;i++){
      var ketemu=false
      for(var j=0;j<kamusLower.length;j++){
          if(kamusLower[j]===str[i]){
              ketemu=true;
              result=result+kamusUpper[j]
              break;
          }
          else if(kamusUpper[j]===str[i]){
              ketemu=true;
              result=result+kamusLower[j]
              break;
          }
          else{
              ketemu=false;
          }
      }
      if(ketemu===false){
          result=result+str[i]
      }

  }
  return result
}

function removeSpaces (str) {
  //code di sini

  var result=''
  for(var i=0;i<str.length;i++){
      if(str[i] !==" "){
          result=result+str[i]
      }
  }
  return result;
}

function passwordGenerator (name) {
    var hasilVocal = changeVocals(name);
    if(hasilVocal===false){
      return "Minimal karakter yang diinputkan adalah 5 karakter"
    }else{
        var hasilReverse=reverseWord(hasilVocal)
        var hasilLowerUper=setLowerUpperCase(hasilReverse);
        var hasilRemoveSpace=removeSpaces(hasilLowerUper);
        return hasilRemoveSpace
    }
  //code di sini
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'  