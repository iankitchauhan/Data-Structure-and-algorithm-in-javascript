function isPrime(n) {
    if( n<2 || n%2 ===0){
    return false
    }
      if (n == 2) {
        return true
      }
      for (let i = 3; i < n; i++) {
        if (n % i == 0) {
          return false
        }
      }
      return true
    }
    unary =[];
    console.log(isPrime(4),'prime number');
    var N=69;
     for(let i=2;i<N;i++){
    if(isPrime(i)){
    if(69%i ==0){
    unary.push(i)
    }
    }
    } 
    console.log(unary,'prime factors')
    