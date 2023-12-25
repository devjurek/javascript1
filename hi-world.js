
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

//probando paso por referencias (arryas)
let herramientas = ["martillo"]
herramientas.push("tornillos", "destornillador")
console.log(herramientas)

//probando paso por referencias (objetos)
let bolso = {
    cuaderno: "📗"
}
let handbag = bolso
bolso.handbag = "📓"
console.log(bolso)

//1. Concatenacion: opcion +
const direccion = "Calle los espejos 557"
const ciudad = " Valle cristal"
const direccionCompleta = "Mi direccion completa es " + direccion + ciudad
console.log(direccionCompleta)

//2. Concatenacion: Template Literals
const marca = "Mitsubishi"
const modelo = "Lancer evolution"
const año = " 2000"
const carro = `Este auto es un ${marca} modelo ${modelo} del año ${año}`
console.log(carro)

//3. Concatenacion: Join()
const primera = "Me gustaria"
const segunda = "Ser un buen"
const tercera = "Ingeniero de Software"
const pensamiento = [primera, segunda, tercera]
console.log(pensamiento.join (" "))

//4. concatenacion: concat()
const hobbie1 = "Correr"
const hobbie2 = "Gym"
const hobbie3 = "Programar"
const hobbies = "Mis hobbies son: ".concat(hobbie1, ", ", hobbie2, ", ", hobbie3, ". " )
console.log(hobbies)

//5. funciones
function calculateDiscount (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}
    const originalPrice = 100
    const discountPercentage = 20
    const finalPrice = calculateDiscount(originalPrice, discountPercentage)

    console.log("Original Price: $" + originalPrice)
    console.log("Discount: " + discountPercentage + "%")
    console.log("Price with discount: $" + finalPrice)

    //6. identificadores

    const house = {
        dogName: "Fido",
        dogGreeting: function () {
            console.log( `Hi, Im ${this.dogName}`)
        }
    }

    house.dogGreeting()

    //7. Metodos Bind, call y apply

    const owner = "Manuel"
    const address = "991 North"
    const dogName = "Coconut"

    function dogGreeting() {
        console.log(`Hi, I'm ${dogName} and I live with ${owner} on ${address}`)
    }

    dogGreeting()

    // 8. arrows funcions
    
    const greeting=function(name){return `Hi, ${name}`}
    const newGreeting=(name)=>{return `Hi, ${name}`}
    const newGreetingImplicit=name=>`Hi, ${name}`
    const newGreetingImplicitWithTwoParameters=(name,lastName)=>`Hi, I'm ${name} ${lastName}`

    const finctionalCharacter={name:'Uncle Ben',messageWithTraditionalFunction:function(message){console.log(`${this.name} says: ${message}`)},messageWithArrowFunction:(message)=>{console.log(`${this.name} says: ${message}`)}}

    finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')

    finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')

    //9. Funciones constructoras

    function Mokepon (name, ownMessage) {
        this.name = name
        this.ataqueType = () => ownMessage
    }
   
    const noChanrmander = new Mokepon("No-Charmander", "Charm Charm")
    console.log(noChanrmander.name)
    console.log(noChanrmander.ownMessage)
    console.log(noChanrmander.ataqueType())

    const MokeponWithArrow = (name, ownMessage) => ({
        name: name,
        launchMessage: ownMessage
    })

    const personalMessage = () => "Attack!!"
    const noBulbasaur = MokeponWithArrow("No-Bulbasaur", personalMessage)

    console.group(noBulbasaur.name)
    console.group(noBulbasaur.launchMessage())