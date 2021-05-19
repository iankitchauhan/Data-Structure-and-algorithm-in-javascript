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
              return undefined;
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
}

var tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left= new Node(7);
tree.root.left.right = new Node(9);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(35);
console.log(tree,'basic skeleton of binary search tree');
