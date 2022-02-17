import { swap } from "./utils/swap.js";
import { find_color } from "./utils/find_color.js"
import { changeCornerOrientation } from "./utils/change_corner_orientation.js"
import { changeEdgeOrientation } from "./utils/change_edge_orientation.js"

class Cubie{
  constructor(piece, orientation){
      this.piece = piece;
      this.orientation = orientation} 

}

export class Edge extends Cubie{
  constructor(piece, orientation){
      super(piece, orientation)
  }
}

export class Corner extends Cubie{
  constructor(piece, orientation){
      super(piece, orientation)
  }
}

export class Cube{
  constructor(unit, edges, corners){
      this.unit = unit;
      this.edges = edges;
      this.corners = corners;
}

  r_move(){

      //Swapping edge pieces

      this.edges = swap(this.edges, [1, 10, 5, 8], [10, 5, 8, 1]);

      //No need to change orientation of the edges

      //Changing the orientation of the corners

      this.corners = changeCornerOrientation(this.corners, [0, 4], [1, 5]);

      this.corners = swap(this.corners, [0, 1, 4, 5], [5, 0, 1, 4]);
  }
  l_move(){
      this.edges = swap(this.edges, [3, 9, 7, 11], [9, 7, 11, 3]);
      this.corners = changeCornerOrientation(this.corners, [2, 6], [3, 7]);
      this.corners = swap(this.corners, [2, 7, 6, 3], [7, 6, 3, 2]);
  }  
  u_move(){
    this.edges = swap(this.edges, [0, 1, 2, 3], [1, 2, 3, 0]);
    this.corners = swap(this.corners, [0, 1, 2, 3], [1, 2, 3, 0]);
  }
  d_move(){
    this.edges = swap(this.edges, [4, 5, 6, 7], [5, 6, 7, 4]);
    this.corners = swap(this.corners, [4, 5, 6, 7], [5, 6, 7, 4]);
  }
  f_move(){
    this.edges = swap(this.edges, [2, 8, 4, 9], [8, 4, 9, 2]);
    this.edges = changeEdgeOrientation(this.edges, [2, 8, 4, 9]);
    this.corners = changeCornerOrientation(this.corners, [1, 7], [2, 4]);
    this.corners = swap(this.corners, [1, 4, 7, 2], [4, 7, 2, 1]);
  }
  b_move(){
    this.edges = swap(this.edges, [0, 11, 6, 10], [11, 6, 10, 0]);
    this.edges = changeEdgeOrientation(this.edges, [0, 11, 6, 10]);
    this.corners = changeCornerOrientation(this.corners, [3, 5], [0, 6]);
    this.corners = swap(this.corners, [3, 6, 5, 0], [6, 5, 0, 3]);
  }

  colorScheme(){

      let colorScheme = Array(54);
      //The centers do not move. Each sticker is given by (i*9 + 4)
      for (let i = 0; i <=5; i++){
        colorScheme[i*9 + 4] = find_color(i*9 + 4);
  }
      //In each position check what is the piece 
      //Edges

      const orientationEdgeIs0 = [1, 5, 7, 3, 46, 50, 52, 48, 23, 21, 39, 41];
      const orientationEdgeIs1 = [37, 28, 19, 10, 25, 34, 43, 16, 30, 14, 32, 12];

      for (let i = 0; i <= 11; i++){
          let edge = this.edges[i];
          if (edge.orientation == 0){
              colorScheme[orientationEdgeIs0[i]] = find_color(orientationEdgeIs0[edge.piece]);
              colorScheme[orientationEdgeIs1[i]] = find_color(orientationEdgeIs1[edge.piece]);
          }
          else{
              colorScheme[orientationEdgeIs0[i]] = find_color(orientationEdgeIs1[edge.piece]);
              colorScheme[orientationEdgeIs1[i]] = find_color(orientationEdgeIs0[edge.piece]); 
          }   
      }

      //Corners

      /*const orientationCornerIs0 = [2, 8, 6, 0, 47, 53, 51, 45];
      const orientationCornerIs1 = [36, 27, 18, 9, 26, 35, 44, 17];
      const orientationCornerIs2 = [29, 20, 11, 38, 33, 42, 15, 24];*/

      const stickers = [2, 8, 6, 0, 47, 53, 51, 45,
                      36, 27, 18, 9, 26, 35, 44, 17, 
                      29, 20, 11, 38, 33, 42, 15, 24];

      for (let i = 0; i <= 7; i++){
          let corner = this.corners[i];
          let increment;
          if (corner.orientation == 0){
            increment = [0, 8, 16]
          }
          else if (corner.orientation == 1){
              increment = [8, 16, 0]
          }
          else if (corner.orientation == 2){
              increment = [16, 0, 8]
          }

          colorScheme[stickers[i]] = find_color(stickers[corner.piece + increment[0]]);
          colorScheme[stickers[i + 8]] = find_color(stickers[corner.piece + increment[1]]);
          colorScheme[stickers[i + 16]] = find_color(stickers[corner.piece + increment[2]]);
      }

      

      return colorScheme
  }

}

export function generateCube(){
  let edges = [];

  for(let i = 0; i <= 11; i++){
    let edge = new Edge(i, 0);
    edges.push(edge)
  }

  let corners = [];

  for(let i = 0; i <= 7; i++){
    let corner = new Corner(i, 0);
    corners.push(corner)
  }

  let cube = new Cube(1, edges, corners);

  return cube
}

export function executeMove(move, cube){
  let newCube = new Cube(cube.unit, cube.edges, cube.corners);
  if (move == 0){
      newCube.u_move()
  }
  else if (move == 1){
      newCube.l_move()
  }
  else if (move == 2){
      newCube.f_move()
  }
  else if (move == 3){
      newCube.r_move()
  }
  else if (move == 4){
      newCube.b_move()
  }
  else if (move == 5){
      newCube.d_move()
  }
  return newCube
}

export function checkSolved(cube){
  let solved = true
  for (let i = 0; i <= 7; i++){
    let corner = cube.corners[i];
    if (corner.orientation != 0 || corner.piece != i){
      solved = false;
      break
    }
  }
  for (let i = 0; i <= 11; i++){
    let edge = cube.edges[i];
    if (edge.orientation != 0 || edge.piece != i){
      solved = false;
      break
    }
  }
  return solved
}