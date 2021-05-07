function pivots(arr, start = 0, end = arr.length - 1) {
  console.log(arr, 'arrr data');

  function swap(arr, index, i) {
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  var swapIndex = start;
  var pivot = arr[start];
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      console.log(arr, 'arrr data');
    }
  }
  swap(arr, swapIndex, start);
  console.log(arr, 'final data');
  return swapIndex
}

function quickSort(arr, start = 0, end = arr.length - 1) {
if(start < end) {
  var pivot = pivots(arr, start, end);
  //left
  quickSort(arr, start, pivot - 1);
  //right 
  quickSort(arr, pivot + 1, arr.length);
  }
  return arr;
}
console.log(quickSort([4, 8, 10, 2, 1, 5, 7, 6, 3]), 'final result');
