function facto(n) {

    if (n <= 1) {
      return 1;
    } else {
     return n*facto(n - 1);
    }
  
  }
  
  var result = facto(5); //5*4*3*2*1
  
  console.log(result,'result data');