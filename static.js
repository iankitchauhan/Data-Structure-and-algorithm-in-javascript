class team {
    static name = 'ankit';
    constructor(data) {
      this.data = data;
    }
    
    static  getName(){
    return `ankit chauhan`
    }
    
    chekc(){
    return `just to chekc`   //This will show error as this  is not static
    }
  
  }
  
  let a = team.name;
  console.log(a,'value of a')
  let b = team.getName();
  console.log(b,'value of b')
  
  let c = team.chekc() 
  console.log(c,'dddddddd')