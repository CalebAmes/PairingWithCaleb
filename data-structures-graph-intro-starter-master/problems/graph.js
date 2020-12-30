
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
    
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
