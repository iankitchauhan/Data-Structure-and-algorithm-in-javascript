
function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    console.log(arr,'arr');
      console.log(left,'left');
       console.log(right,'right')
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2;
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0,half);
  return merge(mergeSort(left),mergeSort(array))
}

var a = [ 1,7, 4,8,10, 6, 5];
let v = mergeSort(a);
console.log(v,'called the data');