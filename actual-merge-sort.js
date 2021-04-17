function merge(arr) {
    if(arr.length<=1){
    return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = merge(arr.slice(0,mid));
    let right = merge(arr.slice(mid));
    return mergeSort(left,right);
    
    }
    
    
    
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
    
      return mergeArray
    }
    
    console.log(merge([10,24,76,73,72,1,9]), 'inseratopn sort')
    