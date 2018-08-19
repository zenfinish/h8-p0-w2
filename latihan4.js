function countDistance(par1, par2) {
    var huruf = par1[0];
    if(huruf === par2) {
        return 1;
    }else{
        var modifStr = par1.substring(1);
        return 1 + countDistance(modifStr, par2)
    }
}

console.log(countDistance('12104123', '1')); // 1
console.log(countDistance('the quick brown fox', 'o')); // 13
console.log(countDistance('hahahah', 'a')); // 2