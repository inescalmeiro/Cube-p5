export function faceDefiniton(face){
    //This vector will be used to set the localation of each sticker
    const coordenate1 = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    const coordenate2 = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    const constant = [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5];
    let x, y, z, increment1, increment2;
    if (face == 0){
        x = coordenate2;
        y = coordenate1;
        z = constant;
        increment1 = [0.5, 0.5, 0];
        increment2 = [0.5, -0.5, 0];
    }
    else if (face == 1){
        x = constant.map(x => x * (-1));
        y = coordenate2;
        z = coordenate1.map(x => x * (-1));
        increment1 = [0, 0.5, 0.5];
        increment2 = [0, 0.5, -0.5];
    }
    else if (face == 2){
        x = coordenate2;
        y = constant;
        z = coordenate1.map(x => x * (-1));
        increment1 = [0.5, 0, 0.5];
        increment2 = [0.5, 0, -0.5];
    }
    else if (face == 3){
        x = constant;
        y = coordenate2.map(x => x * (-1));
        z = coordenate1.map(x => x * (-1));
        increment1 = [0, 0.5, 0.5];
        increment2 = [0, 0.5, -0.5];
    }
    else if (face == 4){
        x = coordenate2.map(x => x * (-1));
        y = constant.map(x => x * (-1));
        z = coordenate1.map(x => x * (-1));
        increment1 = [0.5, 0, 0.5];
        increment2 = [0.5, 0, -0.5];
    }
    else if (face == 5){
        x = coordenate2;
        y = coordenate1.map(x => x * (-1));
        z = constant.map(x => x * (-1));
        increment1 = [0.5, 0.5, 0];
        increment2 = [0.5, -0.5, 0];
    } 
    return [x, y, z, increment1, increment2]
}
