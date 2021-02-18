function nonRepeat(str){
    var obj ={};
    
    for(let i =0;i<str.length;i++){
    if(!obj[str[i]]){
    obj[str[i]] = 1;
    } else{
    obj[str[i]]++;
    }
    
    }
    
      for (var j in obj){
        if (obj[j]==1)
           return j;
      }
    
    }
    
    
    let t = nonRepeat('the quick brown fox jumps then quickly blow air');
    console.log(t,'hghghghgh')