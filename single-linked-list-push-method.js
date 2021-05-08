class Node{
constructor(val){
this.val = val;
this.next = null;
}

}

class singleLinkList{
constructor(){
this.head =null;
this.tail= null;
this.length =0;
}

push(val){
var newNode = new Node(val);
if(!this.head){
this.head = newNode;
this.tail = newNode;
} else{
this.tail.next = newNode;
this.tail = newNode;
}
this.length++;
return this;
}
}

var list = new singleLinkList();
list.push('hello');
list.push('world');
list.push('new');
console.log(list,'new list created');
