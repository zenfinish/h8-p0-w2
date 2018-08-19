function bubbleSort(array) {
  
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length + 1; i++) {
      if (array[i - 1] > array[i]) {
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;

        done = false;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);