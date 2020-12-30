
class Graph {
  constructor() {
    this.adjList = new Object();
  }

  addVertex(vertex) {
    if (vertex in this.adjList) {
      return;
    }

    this.adjList[vertex] = new Array();
  }

  addEdges(srcValue, destValue) {
    if (!(srcValue in this.adjList)) {
      this.addVertex(srcValue);
    }

    if (!(destValue in this.adjList)) {
      this.addVertex(destValue);
    }

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    for (let i = 0; i < edges.length; i++) {
      this.addEdges(edges[i][0], edges[i][1])
    }
    return this.adjList;
  }

  //we need to return an array
  //this array needs to contain all obj eles
  // in BFS order
  //[a,b,c,d ,e,f,g]
  //we are taking in a staring point that has itself and neighbors
  //we start by pushing our first value into the array, then pushing its neighbors one by one
  //.buildGraph() will give us all the information we need

  // [a,b,c,d,e,f,g]



  breadthFirstTraversal(startingVertex) {
    let arr = [];
    arr.push(startingVertex);//a

    for (let i = 0; i < arr.length; i++) {
      let first = this.adjList[arr[i]];
      first.forEach(el => {
        if (!(arr.includes(el))) arr.push(el);
      })
    }
    return arr;
    // Code goes here ...
  }
  // a: [ 'b', 'c', 'd' ],
  // b: [ 'a', 'c', 'e' ],
  // c: [ 'a', 'b', 'f', 'g' ],
  // d: [ 'a', 'g' ],
  // g: [ 'd', 'c', 'f' ],
  // e: [ 'b' ],
  // f: [ 'c', 'g' ]

  //should return [a,d,g,f,c,b,e]

  // [ 'a', 'b', 'c', 'f', 'g', 'd', 'e' ]

  depthFirstTraversalIterative(startingVertex) {
    let result = [];
    result.push(startingVertex); //a

    for (let i = 0; i < result.length; i++) {//['a']
      let holder = this.adjList[result[i]];
      for (let j = holder.length - 1; j >= 0; j--) {
        if (!(result.includes(holder[j]))) {
          result.push(holder[j]);
          break;
        }
      }
    }
    return result;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if (visited.has(startingVertex)) return vertices;

    visited.add(startingVertex);
    vertices.push(startingVertex);

    let holder = this.adjList[startingVertex];

    for (let j = 0; j < holder.length; j++) {
      this.depthFirstTraversalRecursive(holder[j], visited, vertices)
    }
    return vertices
  }

}
let graff = new Graph()

const edges =
  [['a', 'b'],
  ['a', 'c'],
  ['a', 'd'],
  ['d', 'g'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'f'],
  ['c', 'g'],
  ['f', 'g']];

graff.buildGraph(edges)
console.log(graff.depthFirstTraversalRecursive('a'))
// console.log(graff.breadthFirstTraversal('a'))
// // console.log(graff.addEdges('e', 'f'))
// console.log(graff.(edges))
// console.log(graff)

module.exports = {
  Graph
};
