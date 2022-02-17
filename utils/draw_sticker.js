export function drawSticker(sticker, unit, x, y, z, increment1, increment2){
    beginShape()
    vertex((x[sticker] + increment1[0])*unit,
           (y[sticker] + increment1[1])*unit,
           (z[sticker] + increment1[2])*unit);

    vertex((x[sticker] + increment2[0])*unit,
           (y[sticker] + increment2[1])*unit,
           (z[sticker] + increment2[2])*unit);

    vertex((x[sticker] - increment1[0])*unit,
           (y[sticker] - increment1[1])*unit,
           (z[sticker] - increment1[2])*unit);

    vertex((x[sticker] - increment2[0])*unit,
           (y[sticker] - increment2[1])*unit,
           (z[sticker] - increment2[2])*unit);
    endShape(CLOSE)
}