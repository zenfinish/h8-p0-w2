/*
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

1.  Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
2.  John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
*/

function changeMe(arr) {
  // you can only write your code here!

  var format=["firstName","lastName","Gender","Age"];
    var result={};
    var date =new Date();
    var year=date.getFullYear();
    for(var i=0;i<arr.length;i++){
        var name=i+1+". "+arr[i][0]+" "+arr[i][1]
        result[name]={};
        for(var j=0;j<format.length;j++){
            if(format[j]==='Age'){
                
                if(arr[i][j]===undefined || arr[i][j]>year ){
                    var age="invalid Birth Year"
                    result[name][format[j]]=age;
                }
                else{
                    var age=year-arr[i][3];
                    result[name][format[j]]=age;
                }
                
            }
            else{
                result[name][format[j]]=arr[i][j]
            }
        }
    }
  console.log(result);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""