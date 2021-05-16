class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }


    push(val){
        let a = new Node(val);
     if(this.length == 0)  {
         this.head =a;
         this.tail=a;
     } else{
         this.tail.next = a;
         a.prev = this.tail;
         this.tail =a;
     }
this.length++;
return this;
    }

    pop(){
if(!this.head){
    return undefined
}
let node = this.tail;

if(this.length ===1){
    this.head = null;
    this.tail =null;
} else {
this.tail = node.prev;
this.tail.next = null;
    }
    node.prev = null;
this.length--;
return node;
    }

    shift(){
        if(!this.head || this.length == 0){
            return undefined;
        }
                      let node = this.head;

        if(this.length == 1){
            this.head = null;
    this.tail =null;
        } else {
        this.head = this.head.next;
        this.head.prev =null;
        node.next = null;
        }

        this.length--;
      
        return node;
    }

    unshift(val){

        if(!this.head || this.length == 0){
            return this.push(val)
        }
        let node  = new Node(val);
       this.head.prev = node;
       node.next = this.head;
       this.head = node;
       this.length++;
       return this;
    }

}
let dll = new DoubleLinkedList();
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
dll.unshift(2);
dll.unshift(3);
