// Crea una función que calcule el área de un rectángulo y la muestre por consola.

function areaRectangulo (b,h) {
    console.log (b*h)
}
areaRectangulo(3,2)

function areaRectangulo1 (b,h) {
    return b*h
}
const areaRect = areaRectangulo1 (3,3)
console.log(areaRect)