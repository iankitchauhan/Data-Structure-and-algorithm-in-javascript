class DijkstraAlgo{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] =[];
    }

    addEdge(vertex1,vertex2,weight){
      this.adjacencyList[vertex1].push({node:vertex2,weight});
       this.adjacencyList[vertex2].push({node:vertex1,weight})  
    }

    Dijkstra(start,finish){
                   let node = new PriorityQueue()

        var distance={};
        var path =[];
        var prev ={};
        let smallest;
        console.log(this.adjacencyList,'adjacencyList list')
        for(let vertex in this.adjacencyList){
            if(vertex === start){
               distance[vertex ] =0;
               node.Enqueue(vertex,0);
            } else{
                             distance[vertex ] =Infinity;
                               node.Enqueue(vertex,Infinity)

            }
             prev[vertex] =null;
        }
        while(node.values.length){
           smallest =   node.Dequeue().value; //check
          if(smallest == finish){
              //we are done
              console.log(distance,'distance');
                console.log(prev,'previous')
                while(prev[smallest]){
path.push(smallest);
smallest = prev[smallest];
                }
                break;
          }
          if(smallest || distance[smallest] !== Infinity){

               for(let neighbor in this.adjacencyList[smallest]){
                   let nextNode = this.adjacencyList[smallest][neighbor];
                   let candidate = distance[smallest] + nextNode.weight;
                   let nextNeighbor = nextNode.node;
                   if(candidate < distance[nextNeighbor]){
                       distance[nextNeighbor] = candidate;
                       prev[nextNeighbor] = smallest;
                       node.Enqueue(nextNeighbor,candidate);
                   }


          }

          }

         
        }

        return path.concat(smallest).reverse();
     

    }


}

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

let g = new DijkstraAlgo();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A','B',4);
g.addEdge('A','C',2);
g.addEdge('B','E',3);
g.addEdge('C','D',2);
g.addEdge('C','F',4);
g.addEdge('D','E',3);
g.addEdge('D','F',1);
g.addEdge('E','F',1);
g.Dijkstra('A','E');
