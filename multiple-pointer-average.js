function averagePair(arr,avg){
  // add whatever parameters you deem necessary - good luck!
  let left =0;
  let right = arr.length -1;
  while(left < right){
      let ot = (arr[left] + arr[right])/2;
      if(ot === avg){
          return true;
      } else if(ot< avg){
          left++;
      } else if(ot> avg){
          right--;
      } 
      }
      return false;
  
}
