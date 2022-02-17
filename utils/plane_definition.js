export function planeDefinition(plane){
    const constant = [0.5, 0.5, 0.5, 0.5];
    const coordenate1 = [1.5, 1.5, -1.5, -1.5];
    const coordenate2 = [1.5, -1.5, -1.5, 1.5];
    let x, y, z
    if (plane == 0){
        x = coordenate1;
        y = coordenate2;
        z = constant;
    }
    else if (plane == 5){
        x = coordenate1;
        y = coordenate2;
        z = constant.map(x => x * (-1));
    }
    else if (plane == 4){
        x = coordenate1;
        y = constant.map(x => x * (-1));
        z = coordenate2;
    }
    else if (plane == 2){
        x = coordenate1;
        y = constant;
        z = coordenate2;
    }
    else if (plane == 1){
        x = constant.map(x => x * (-1));
        y = coordenate2;
        z = coordenate1;
    }
    else if (plane == 3){
        x = constant;
        y = coordenate2;
        z = coordenate1;
    }
    return [x, y, z]
}