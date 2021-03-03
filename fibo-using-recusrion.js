function fib(n){
    // add whatever parameters you deem necessary - good luck! 0 1 1  2
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
  return fib(n-1) + fib(n-2);
    
  }