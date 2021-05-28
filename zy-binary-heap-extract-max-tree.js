class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39,41, 18, 27,12, 33]
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    while (true) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      let element = this.values[idx]
      if (element > parent) {
        this.values[idx] = parent;
        this.values[parentIndex] = element;
        idx = parentIndex;
      } else {
        break;
      }
    }

  }
   swap(lr,current){
     let temp = this.values[current];
     this.values[current] = this.values[lr];
     this.values[lr] = temp;
  }

  extractMax(){
     var removedNode =  this.values.shift();
      this.values.unshift(this.values[this.values.length-1]);
      this.values.pop();
      let idx = 0;
     let parentValue = this.values[idx];
      while(true){
let left = 2*idx+1;
let right = 2*idx +2;
if(this.values[left] > this.values[idx] || this.values[right] > this.values[idx]) {
if(this.values[left] > this.values[right]  || (this.values[left] && !this.values[right])){
this.swap(left,idx);
idx = left;
} else if(this.values[left] < this.values[right]){
this.swap(right,idx);
idx = right;
} else{
    break;
}
} else{
    break;
}

      }


      return removedNode;

  }

 
}

let heap = new MaxBinaryHeap();
heap.extractMax()

