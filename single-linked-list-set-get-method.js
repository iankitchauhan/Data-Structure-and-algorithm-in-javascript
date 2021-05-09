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

get(index){
  if(index< 0 || index > this.length) return null;
let current = this.head;
let count =0;
while(count != index){
 current = current.next;
 count = count + 1;
}
return current;
}
set(index,val){
  if(index< 0 || index > this.length) return null;
let current = this.head;
let count =0;
while(count != index){
 current = current.next;
 count = count + 1;
}
current.val = val;
return true;
}
}

var list = new singleLinkList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.get(2);
list.get(3);
