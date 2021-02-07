var arrayx = [5, 3, 4, 1, 2];

function sortedArray(arr) {
  var j = 0;
  while (j < arr.length) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    j++;
  }
  return arr;
}
let result = sortedArray(arrayx);
console.log(result, 'sorted array')