function angkaPalindrome(num) {
    
    var stringNum  = '';
    for(i = num + 1; i > num; i++) {
        stringNum = String(i);
        
        var kataBalik = '';
        var j = stringNum.length - 1;
        while(j >= 0) {
            kataBalik += stringNum[j];
            j--;
        }

        if(stringNum === kataBalik) {
            return i;
            break;
        }
    }

}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001