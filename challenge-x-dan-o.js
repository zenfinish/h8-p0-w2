function xo(str) {
    var jml = str.length;
    var x = 0;
    var o = 0;
    for (var i = 0; i <= jml-1; i++){
        if (str[i] === 'x'){
            x = x + 1;
        }else if (str[i] === 'o'){
            o = o + 1;
        }
    }

    if (x === o){
        return true;
    }else{
        return false;
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));