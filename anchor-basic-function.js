// Tugas 1
    function shoutOut() {
        console.log("Halo Function!");
    }
    shoutOut();

    console.log("");

// Tugas 2
    function calculateMultiply(num1,num2) {
        return num1 * num2;
    }
    var num1 = 5;
    var num2 = 6;
    var hasilPerkalian = calculateMultiply(num1,num2);
    console.log(hasilPerkalian);

    console.log("");

// Tugas 3
    function processSentence(name,age,address,hobby) {
        return "Nama saya "+name+", umur saya "+age+", alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";
    }
    var name = "Agus";
    var age = 30;
    var address = "Jln Malioboro, Yogjakarta";
    var hobby = "gaming";
    var fullSentence = processSentence(name,age,address,hobby);
    console.log(fullSentence);