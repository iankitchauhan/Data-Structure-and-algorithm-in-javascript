function gcd(n1,n2){
    let data=0;
    for(let i=1;i<n1 && i<n2;i++){
    if(n1%i ==0 && n2%i == 0){
    data = i
    }
    }
    return data;
    }
    
    let result = gcd(14, 21);
    console.log(result,'result data');
    
    