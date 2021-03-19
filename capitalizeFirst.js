function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    for(let i =0;i<arr.length;i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  
    return arr;
    
  }
  
   capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  