


Function.prototype.mybind = function(...args){
    var obj = this;
    let rest = args.slice(1);
    return function(...arg1){
    obj.apply(args[0],[...rest,...arg1])
    }
    
    }
    
    
    var obj ={
    name:'Ankit',
    last:'Chauhan'
    }
    
    function disName(cast,pl){
    console.log(`My name is ${this.name}  ${this.last} cast is ${cast} place is ${pl}`)
    }
    
    var dd = disName.mybind(obj,'guujat');
    
    dd('dhaka');