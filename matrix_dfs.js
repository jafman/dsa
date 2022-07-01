/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let totalIslands = 0;

  let visited = new Array(grid.length).fill(0);
  visited = visited.map(() => new Array(grid[0].length).fill(false));
  
  for(let row=0; row<grid.length; row++){
      for(let column=0; column<grid[row].length; column++){
          if(!visited[row][column] && grid[row][column] == 1){
            totalIslands++;
            console.log([row, column])
          } 
          modifiedDFS(row, column, grid, visited);
      }
  }

  function modifiedDFS(row, col, grid, visited){
    //console.log('xxx', visited)
    if( row<0 || col<0 || col>=grid[0].length || row>=grid.length || visited[row][col] || grid[row][col] == 0){
      return;
    }
    //output.push(grid[row][col]);
    visited[row][col] = true;
    // dfs top
    modifiedDFS(row-1, col, grid, visited);
    // dfs right
    modifiedDFS(row, col+1, grid, visited);
    // dfs right 
    modifiedDFS(row+1, col, grid, visited);
    // dfs left
    modifiedDFS(row, col-1, grid, visited);
  }
  
  
  
  return totalIslands;
};

function traverseGrid(grid){
  let visited = new Array(grid.length).fill(0);
  visited = visited.map(() => new Array(grid[0].length).fill(false));
  let output = [];
  dfs(0,0,grid,visited,output);
  return output;
}

function dfs(row, col, grid, visited, output){
  if( row<0 || col<0 || col>=grid[0].length || row>=grid.length || visited[row][col]){
    return;
  }
  output.push(grid[row][col]);
  visited[row][col] = true;
  // dfs top
  dfs(row-1, col, grid, visited, output);
  // dfs right
  dfs(row, col+1, grid, visited, output);
  // dfs right 
  dfs(row+1, col, grid, visited, output);
  // dfs left
  dfs(row, col-1, grid, visited, output);
}

function bfs(){
  
}


let grid = [
  [1,  2, 3,4, 5],
  [6,  7, 8,9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]
/*
   [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]
*/

const gridB = [ 
                [1,1,1],
                [0,1,0],
                [1,1,1]
              ];

//console.log('Result', traverseGrid(grid));
console.log('Islands:',numIslands(gridB))