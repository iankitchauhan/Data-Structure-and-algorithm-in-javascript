function maxSumArray(arr,num){
     let maxSum=0;
   let temp =0;
   if(arr.length < num) {
       return null;
   }
  
   for(let i=0;i<num;i++){
       maxSum += arr[i];
   }
   temp = maxSum;
   for(let j=num;j<arr.length;j++){
       temp = temp - arr[j - num] + arr[j];
       maxSum = Math.max(maxSum,temp);
   }
   return maxSum;
}


console.log(maxSumArray([2,6,9,2,1,8,5,6,3], 3),'resultssss');
