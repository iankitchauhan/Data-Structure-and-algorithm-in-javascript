function fibo(n){
    var t =[0,1];
    
    for(let i =2;i<=n;i++){
    t[i] = t[i-1] + t[i-2];
    }
    
    return t[t.length-1];
    }
    
    let result = fibo(12);
    console.log(result,'result data');