function subStringPresent(s1,s2) {
    var b = s2.length; 
    var j=0;
    
    while(j<s1.length){
    var text=''
    
    for(let i = 0+j;i<b+j;i++){
    text =text+s1[i];
    }
    if(s2 == text){
    return true
    }
    j++;
    }
    return false
    
    }
    
    var result = isPrime('hello world India','world');
    console.log(result,'final result')