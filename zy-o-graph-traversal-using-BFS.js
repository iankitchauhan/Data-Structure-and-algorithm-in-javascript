class Graph{
    constructor(){
        this.adjacencyList ={};
    }

    addVertex(name){
      if(!this.adjacencyList[name]) this.adjacencyList[name] =[];
    }

    addEdge(v1,v2){
        if(v1 in this.adjacencyList){
          if(!this.adjacencyList[v1].includes(v2))  this.adjacencyList[v1].push(v2);
        } ;
         if(v2 in this.adjacencyList){
            if(!this.adjacencyList[v2].includes(v1))  this.adjacencyList[v2].push(v1)  
         }
        
    }

    removeEdge(v1,v2){
        let v1Edges =[];
        for(let i in this.adjacencyList[v1]){
            if(this.adjacencyList[v1][i] != v2){
                v1Edges.push(this.adjacencyList[v1][i])
            }
        }
       if(v1 in  this.adjacencyList) this.adjacencyList[v1] = v1Edges;
         let v2Edges =[];
        for(let i in this.adjacencyList[v2]){
            if(this.adjacencyList[v2][i] != v1){
                v2Edges.push(this.adjacencyList[v2][i])
            }
        }
        if(v2 in  this.adjacencyList) this.adjacencyList[v2] = v2Edges;

    }

//     removeVertex(vertex){
//         if(vertex in this.adjacencyList){
//             delete this.adjacencyList[vertex];
//         }
//         for(let i in this.adjacencyList){
//             var newList =[];

//              for(let j in this.adjacencyList[i]){
//             if(this.adjacencyList[i][j] != vertex){
//                 newList.push(this.adjacencyList[i][j])
//             }
//         }
//          this.adjacencyList[i] = newList;
//         }
//     }
 removeVertex(vertex){
     while(this.adjacencyList[vertex].length){
         let adjacentVertex = this.adjacencyList[vertex].pop();
         this.removeEdge(vertex,adjacentVertex);
     }

     delete this.adjacencyList[vertex];
 }

bfs(start){
    var result =[];
    var visited ={};
    var queue =[start];
    var currentVertex;
    visited[start] = true;
    const adjacent = this.adjacencyList;
while(queue.length){
    currentVertex = queue.shift();
    result.push(currentVertex)
      adjacent[currentVertex].forEach(neighbour=>{
            if(!visited[neighbour]){
                  visited[neighbour] = true;
               queue.push(neighbour);   
            }
         }) 
}
   
 

    return result;
} 



}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');
g.bfs("A");

//         A
//       /  \
//      B    C
//      |    |
//      D----E
//       \  /
//        F 
//RESULT - ['A','B','C','D','E','F']
