function linearSearch(n,key){
    for(let i =0;i<n.length;i++){
     if(n[i] ==key)  {
         return i;
     } 
    }
   
    return -1;
      
   }
   
   linearSearch([7,13,12,11],20)// return 1 if value exist in the array else return -1