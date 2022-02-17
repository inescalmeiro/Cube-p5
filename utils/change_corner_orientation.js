export function changeCornerOrientation(corners, corners0to1, corners0to2){
    const change0to1 = [1, 2, 0];
    const change0to2 = [2, 0, 1];

    for (let i = 0; i <= 7; i++){
        let corner = corners[i];
        if (corners0to1.indexOf(i) != -1){
            corner.orientation = change0to1[corner.orientation];
        }
        if (corners0to2.indexOf(i) != -1){
            corner.orientation = change0to2[corner.orientation];
        }
    }
    return corners
}

