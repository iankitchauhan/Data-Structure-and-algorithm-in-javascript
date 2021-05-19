class Node{
    constructor(value){
        this.value= value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root =null;
    }

    insert(val){
        var newNode = new Node(val);
       if(!this.root){
           this.root = newNode;
           return this
       } 

      var current = this.root;
      while(true){
          if(val === current.value){
              return console.log('value already exists');
          }
          if(val<current.value){
              if(!current.left){
                  current.left = newNode;
                  return this;
              } else{
                  current = current.left;
              }
          } else{
 if(!current.right){
                  current.right = newNode;
                  return this;
              } else{
                  current = current.right;
              }

          }
      }
      

    }

    find(val){
         if(!this.root){
           return false;
       } 
          var current = this.root;
      while(current){
          if(val === current.value){
              return true;
          }
          if(val<current.value){    
                  current = current.left;     
          } else{
                  current = current.right;
          }
      }

      return false;
          
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree,'basic skeleton of binary search tree');
tree.find(50);
