class MaxbinaryHeap{
  constructor(){
    this.values =[41,39,33,18,27];
  }


  insert(val){
    this.values.push(val);
    this.bubbleUp()
  }

  bubbleUp(){
   let idx = this.values.length -1;
let element = this.values[idx];
   while(idx>0) {
     let parentIndex = Math.floor((idx -1)/2);
     let parent = this.values[parentIndex];
     if(element <= this.values[parentIndex]) break;
       this.values[parentIndex] = element;
       this.values[idx] = parent;
       idx = parentIndex;
   
   }
  }

  extractMax(){
    let max = this.values[0];
    var oldNode = this.values.pop();
   
    if(this.values.length > 0) {
       this.values[0] =oldNode;
       console.log(this.values,'values');
       this.sinkDown()
    }
  
      return max
  }

  sinkDown(){
    let idx = 0;
    var element = this.values[idx];
     while(true){
        let leftIndex = 2*idx +1;
        let rightIndex = 2*idx +2;
        let swap =null;
        let leftChild = this.values[leftIndex];
         let rightChild = this.values[rightIndex];
        if(element < leftChild){
          swap = leftIndex;
        }
         if((swap ==null && element < rightChild) ||
            (swap !==null && leftChild < rightChild)
          ){
          swap = rightIndex;
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
var heap = new MaxbinaryHeap();
heap.insert(12);
heap.insert(55);
 heap.extractMax();
