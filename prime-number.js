function isPrime(n) {
    if (n < 2 || n % 2 === 0) {
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
  
  var primeNUmberArray = [];
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      primeNUmberArray.push(i)
    }
  }
  console.log(primeNUmberArray, 'array of primme number');
  