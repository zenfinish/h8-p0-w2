function buying(name) {
    var users = [
      ['Adi', 20, 'male'],
      ['Budi', 19, 'male'],
      ['Cici', 20, 'female'],
      ['Dodo', 21, 'male']
    ];
    var product = [
      ['zarra clothes', 500000],
      ['Levi jeans', 1000000],
      ['Adidas Shoes', 1000000]
    ];
    var trans = [
      [0,0],
      [0,2],
      [1,1],
      [2,0],
      [3,2]
    ];

    var idUser = [];
    for (var i = 0; i < users.length; i++){
        if (users[i][0] === name){
            idUser.push(i);
            break;
        }
    }

    var tampil = [];
    for (var i = 0; i < trans.length; i++){
        if (trans[i][0] === idUser[0]){
            tampil.push(product[trans[i][1]][0]);
        }
    }

    return tampil;
  }
  
  console.log(buying('Adi')); // ['zarra clothes', 'Adidas Shoes']