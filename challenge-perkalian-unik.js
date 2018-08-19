function perkalianUnik(arr) {
    // you can only write your code here!
    var temp = [];

    for(var i = 0; i < arr.length; i++) {
        var kali = [];
        for(var j = 0; j < arr.length; j++) {
            if (i !== j){
                kali.push(arr[j]);
            }
        }

        var kali2 = kali[0];
        for(var k = 1; k < kali.length; k++) {
            kali2 = kali2 * kali[k];
        }

        temp.push(kali2);
    }

    return temp;
}
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]