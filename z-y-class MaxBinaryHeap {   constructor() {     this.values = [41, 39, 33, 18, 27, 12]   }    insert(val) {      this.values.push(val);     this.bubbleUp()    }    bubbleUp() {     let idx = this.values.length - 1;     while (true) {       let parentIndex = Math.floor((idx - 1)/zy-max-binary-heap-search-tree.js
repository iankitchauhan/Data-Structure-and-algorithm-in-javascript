class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
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
}

let heap = new MaxBinaryHeap();
heap.insert(55);
