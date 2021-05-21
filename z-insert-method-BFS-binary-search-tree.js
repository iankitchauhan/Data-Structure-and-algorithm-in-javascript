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

    BFS(){
        var node = this.root;
        var queue =[];
        var data =[];
        queue.push(node);
        while(queue.length){
node = queue.shift();
data.push(node.value);
if(node.left){
    queue.push(node.left);
}
if(node.right){
    queue.push(node.right);
}
        }

        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS(),'BFS data');

