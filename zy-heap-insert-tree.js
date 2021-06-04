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
}
var heap = new MaxbinaryHeap();
heap.insert(12);
heap.insert(55);
console.log(heap.values);
