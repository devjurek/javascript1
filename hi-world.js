
//probando el como funciona el terminal con node.js
console.log("Hi World")

//probando definir variables
let numero = 23

//probando como funcionan las operaciones matematicas y los simbolos
numero = numero + (55*2)/2
console.log(numero)

//probando booleano
let verdadero = false
verdadero = true
console.log (verdadero)

//probando datos mutables o complejos
let usuario = {nombre:"Manuel", edad: 18, oficio: "Hacer Manualidades", actualizado: new Date() }
usuario.oficio = "Hacer manualidades y reposteria"
console.log(usuario)

//probando modificacion de datos en arrays
let frutasTropicales= ["Cocos", "Piña"]
frutasTropicales[0] = "Manzana"
console.log(frutasTropicales)

//probando modificacion de datos con funciones
function cambiodefecha(objeto){
    objeto.fecha = "Nueva fecha"
}

let diaActual = {Fecha: `hoy es ${new Date}`}
cambiodefecha(diaActual)

console.log (diaActual)
