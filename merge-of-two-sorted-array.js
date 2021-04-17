function mergeSort(a, b) {
    let i = 0;
    let j = 0;
    let mergeArray = [];
    while (i < a.length && j < b.length) {
      if (a[i] > b[j]) {
        mergeArray.push(b[j]);
        j++;
      } else {
        mergeArray.push(a[i]);
        i++;
      }
    }
    while (i < a.length) {
      mergeArray.push(a[i]);
      i++;
    }
    while (j < b.length) {
      mergeArray.push(b[j]);
      j++;
    }
  
    //console.log(mergeArray,'merge array');
    return mergeArray
  }
  
  console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]), 'inseratopn sort')