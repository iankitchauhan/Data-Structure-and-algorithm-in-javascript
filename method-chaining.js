class team {
    constructor(data){
    this.data = data;
    }
    
    
    subtract(value){
    this.data = this.data - value;
    return this
    }
    add(value){
    this.data = this.data +value
    return this
    }
    
    
    
    }
    
    var obj = new team(5)
    var result = obj.subtract(2).add(10);
    console.log(result,'resulted data');