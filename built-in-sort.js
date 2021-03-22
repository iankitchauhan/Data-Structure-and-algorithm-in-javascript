var a = [6,4,15,10].sort((a,b)=>{
    if(a<b){
        return 1
    }
    if(a>b){
        return -1
    }
});
console.log(a,'sorted array');