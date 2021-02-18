function facto(n) {

    if (n <= 1) {
      return 1;
    } else {
     return n*facto(n - 1);
    }
  
  }
  
  var result = facto(5);
  
  console.log(result,'result data');