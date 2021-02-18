function sumOfTwo(arr,sum) {
    for(let i= 0;i<arr.length;i++){
    
    for(let j= 0;j<arr.length;j++){
    if(i!=j){
    if(arr[i]+arr[j] == sum){
    return true
    }
    }
    }
    }
    return false
    }
    
    let result = sumOfTwo([6,4,3,2,1,7], 90);
    console.log(result,'result data');
    