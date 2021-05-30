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
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dalas');
g.addVertex('Aspen');
g.addVertex('Los Angles');
g.addVertex('Hong Kong');
g.addEdge('Dalas','Tokyo');
g.addEdge('Dalas','Aspen');
g.addEdge('Hong Kong','Dalas');
g.addEdge('Hong Kong','Tokyo');
g.addEdge('Los Angles','Hong Kong');
g.addEdge('Los Angles','Aspen');
g.removeEdge('Los Angles','Hong Kong');
g.removeVertex('Hong Kong');
