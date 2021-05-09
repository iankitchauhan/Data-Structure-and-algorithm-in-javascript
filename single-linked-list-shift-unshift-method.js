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

pop(){
  if(!this.head){
    return undefined;
  }
  var current = this.head;
  var pre =this.head;
  while(current.next !=null){
    pre = current;
      current = current.next;
  }
  this.tail = pre;
  this.tail.next = null;
  this.length--;
  if(this.length ===0){
    this.head = null;
    this.tail = null;
  }
  return current;

}

shift(){
  if(!this.head){
    return undefined;
  }
  var f = this.head;
  this.head = this.head.next;
  this.length--;
   if(this.length ===0){
    this.head = null;
    this.tail = null;
  }
  return f;
}
unshift(val){
  var currentHead = this.head;
   var f = new Node(val);
  if(!this.head){    
  this.head = f;
  this.tail =f;
  } else {
 this.head = f;
  this.head.next = currentHead;
  }
 
  this.length++;
  
  return this;
}
}

var list = new singleLinkList();
list.unshift('Welcome');
list.unshift('hi');
