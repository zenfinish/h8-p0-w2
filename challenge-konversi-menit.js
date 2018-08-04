function konversiMenit(jmlMenit){
    var gabung = '';
    if (jmlMenit / 60 < 1){
        if (jmlMenit < 10){
            gabung = '0:0'+jmlMenit;
        }else{
            gabung = '0:'+jmlMenit;
        }
    }else{
        if(jmlMenit%60 === 0){
            gabung = jmlMenit / 60 +':00';
        }else if(jmlMenit%60 > 0){
            if (jmlMenit%60 < 10){
                gabung = (jmlMenit - jmlMenit%60)/60 +':0'+jmlMenit%60;
            }else{
                gabung = (jmlMenit - jmlMenit%60)/60 +':'+jmlMenit%60;
            }
        }
    }
    return gabung;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));