function binarySearch(n,key){
    // add whatever parameters you deem necessary - good luck!
    let left =0;
  let right = n.length-1;
  while(left<=right){
      let mid = Math.round((left+right)/2);
      if(key>n[mid]){
          left = mid+1;
      }
       if(key<n[mid]){
          right = mid-1;
      }
      if(key === n[mid]){
         return mid;
      }
  }
  
  return -1;
  }

  binarySearch(n,key)