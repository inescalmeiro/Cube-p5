export function swap(vectorToSwap, startVector, finishVector){
    let elements = [];
    for (let i = 0; i <= startVector.length - 1; i++){
        elements.push(vectorToSwap[startVector[i]])
    }
  
    let swappedVector = vectorToSwap;
  
    for (let i = 0; i <= finishVector.length - 1; i++){
        swappedVector[finishVector[i]] = elements[i];
    }
  
    return swappedVector
  }