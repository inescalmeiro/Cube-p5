export function changeEdgeOrientation(edges, edgesToChange){
  for (let i = 0; i <= 11; i++){
    if (edgesToChange.indexOf(i) != -1){
        let edge = edges[i];
        let change = [1, 0];
        edge.orientation = change[edge.orientation];
        edges[i] = edge;
    }
  }
    return edges
  }