function balikKata(kata) {
    var gabung = "";
    for (var i = kata.length; i >= 1; i--){
        gabung = gabung + kata[i-1];
    }
    return gabung;
}

console.log(balikKata("Hello World and Coders"));
console.log(balikKata("John Doe"));
console.log(balikKata("I am a bookworm"));
console.log(balikKata("Coding is my hobby"));
console.log(balikKata("Super"));