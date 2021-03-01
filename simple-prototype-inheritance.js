var names= {
    name:'Ankit Chauhan',
    getName:function(){
    return `${this.name} this is my name`;
    }
    }
    
    name2={
    name:'tinku'
    }
    
    console.log(name2,'actual object')
    
    name2.__proto__ = names;
    
    console.log(name2.getName(),'from parents');