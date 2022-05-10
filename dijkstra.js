// Algorithm
// =========
// Check if a vertex has not been visited and Visit it 
  // Get the distance of this vertix from the starting point. - D
  // Get all vertices connected to the visited vertix
  // Get their distance and check if there exist a shorter distance previously calculated
  // update with the shortest
// When all vertices have been visited, return the array of distances

let visitedVertex = [];
let verticesDistances = [0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity];
let unvisitedVerticesCount = 9;

const algoGraph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
              [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
              [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]

// get shortest unvisited vertix
function getShortestDistance(array){
  //TODO: use a priority queue
  let shortestDistance = Infinity;
  let shortestDistanceIndex = Infinity;
  for(let i=0; i<array.length; i++){
    if(array[i] < shortestDistance && !visitedVertex.includes(i)){
      shortestDistanceIndex = i;
      shortestDistance = array[i];
    }
  }
  
  return {
    index: shortestDistanceIndex,
    distance: array[shortestDistanceIndex]
  }
}

function getConnectedVertices(graph, vertex){
  const row = graph[vertex];
  let connectedVertices = [];
  for(let i = 0; i<row.length; i++){
    if(row[i]){
      connectedVertices.push({
        index: i,
        distance: row[i]
      })
    }
  }
  return connectedVertices;
}

function visitVertix(vertix){
  const distance = vertix.distance;
  const vertixIndex = vertix.index;
  visitedVertex.push(vertixIndex);
  unvisitedVerticesCount -= 1;
  const connectedVertices = getConnectedVertices(algoGraph, vertixIndex);
  for(let j=0; j<connectedVertices.length; j++){
    let vertexDistance = distance + connectedVertices[j].distance;
    verticesDistances[connectedVertices[j].index] = vertexDistance < verticesDistances[connectedVertices[j].index] 
      ? vertexDistance : verticesDistances[connectedVertices[j].index];
  }
}

  console.log('Running Function..... ', '\n')

  while(unvisitedVerticesCount>0){
    const shortestDistance = getShortestDistance(verticesDistances);
    visitVertix(shortestDistance);
  }

  console.log('Final Answer is: ', verticesDistances);


//dijkstra();