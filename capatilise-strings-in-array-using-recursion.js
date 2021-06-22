function capitalizedWords (arr) {
    // add whatever parameters you deem necessary - good luck!
      let s =[];
  
    function helper(arr){
       if(arr.length === 0){
        return ;
    }
    s.push(arr[0].toUpperCase());
    helper(arr.slice(1));
    }
    
    helper(arr);
  return s;
  }
  
   let words = ['i', 'am', 'learning', 'recursion'];
   capitalizedWords(words);