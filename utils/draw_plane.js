export function drawPlane(x, y, z, unit){
    fill(50)
    beginShape()
        vertex(x[0]*unit, y[0]*unit, z[0]*unit)
        vertex(x[1]*unit, y[1]*unit, z[1]*unit)
        vertex(x[2]*unit, y[2]*unit, z[2]*unit)
        vertex(x[3]*unit, y[3]*unit, z[3]*unit)
    endShape (CLOSE)
}