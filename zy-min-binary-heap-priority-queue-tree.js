class PriorityQueue{
  constructor(){
    this.values =[];
  }


  Enqueue(val,priority){
      var node = new Node(val,priority);
    this.values.push(node);
    this.bubbleUp()
  }

  bubbleUp(){
   let idx = this.values.length -1;
let element = this.values[idx];
   while(idx>0) {
     let parentIndex = Math.floor((idx -1)/2);
     let parent = this.values[parentIndex];
     if(element.priority >= this.values[parentIndex].priority) break;
       this.values[parentIndex] = element;
       this.values[idx] = parent;
       idx = parentIndex;
   
   }
  }

  Dequeue(){
    let min = this.values[0];
    var oldNode = this.values.pop();
    if(this.values.length > 0) {
       this.values[0] =oldNode;
       this.sinkDown()
    }
  
      return min;
  }

  sinkDown(){
    let idx = 0;
    var element = this.values[idx];
    var length = this.values.length;
     while(true){
        let leftIndex = 2*idx +1;
        let rightIndex = 2*idx +2;
        let swap =null;
        let leftChild;
        let rightChild;
        if(leftIndex < length){
        leftChild = this.values[leftIndex];
       
        if(element.priority > leftChild.priority){
          swap = leftIndex;
        }
     }
     if(rightIndex < length){
            rightChild = this.values[rightIndex];
         if((swap ==null && element.priority > rightChild.priority) ||
            (swap !==null && leftChild.priority > rightChild.priority)
          ){
          swap = rightIndex;
        }
     }


        if(swap === null){
          break;
        }
this.values[idx] = this.values[swap];
this.values[swap] = element;
idx=swap;


      }
  }
}

class Node{
    constructor(value,priority){
        this.value = value;
         this.priority = priority;
    }
}
var ER = new PriorityQueue();
ER.Enqueue("Common Cold",5);
ER.Enqueue("Glass in foot",3);
ER.Enqueue("gunshot wound",1);
ER.Enqueue("High Fever",4);
ER.Enqueue("Broken arm",2);
// heap.extractMax();
// heap.insert(39);
// heap.insert(100);
