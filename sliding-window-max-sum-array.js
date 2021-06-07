function maxSubarraySum(arr,num){
  // add whatever parameters you deem necessary - good luck!
  var prevSum=0;
  var j =0;
  if(arr.length<num){
      return null;
  }
  while(j<arr.length){
      let sum =0;
      for(let i =0+j;i<num+j;i++){
          sum += arr[i];
      }
      if(prevSum<=sum){
          prevSum = sum;
      }
      j++;
  }
  return prevSum;
}

maxSubarraySum([100,200,300,400],2) // result =700
