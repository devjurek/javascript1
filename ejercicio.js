function digimon (name, type, evolution) {
    this.name = name
    this.type = type
    this.evolution = evolution
    this.digiSpirit = false

    this.displayInfo = function () {
        console.log(`Digimon Information:
        Name: ${this.name}
        Type: ${this.type}
        Evolution: $${this.evolution}
        ${this.digiSpiritspirit ? `Digi-Spirit: Yes` : `Digi-Spirit: No`}`)
    }

    this.digiSpirit = function () {
        this.digiSpirit = true
        console.log(`${this.name} has unlock the Digi-Spirit` )
    }
}

const agumon = new digimon("Agumon", "Fire", "Greymon")
const gabumon = new digimon("Gabumon", "Water", "Warurumon")
const patamon = new digimon("Patamon", "Wind", "Angelmon")

agumon.displayInfo()
gabumon.displayInfo()
patamon.displayInfo()

agumon.digiSpirit()

agumon.displayInfo()
gabumon.displayInfo()
patamon.displayInfo()

// ejericico de comparacion

const digiNumber = 10
const menssage = digiNumber <= 15 ? "Nivel de poder muy bajo" : "Nivel de poder aceptable"

console.log(menssage)


// loop con for

let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i< list.length; i++){
    console.log(list [i])
}

// loop con foreach

let lista = ["eat", "sleep", "code", "repeat"];

list.forEach((item) => {
    console.log(item)
}) 


// loop for of
let pool = ["Agumon", "Gabumon", "Patamon"]

for (digimon of pool) {
    console.log(digimon)
}

// loop for in (para objetos enumerables) y for of (para objetos iterables)

const listaDeNumeros = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4
}

for (numero in listaDeNumeros){
    console.log(numero)
}
for (numero in listaDeNumeros){
    console.log(`${numero} : ${listaDeNumeros [numero]}`);
}


// while

let contador = 0

while (contador < 10){
    console.log(contador);
    contador++;
}


//do while

// exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION = "addToCart"
const REMOVE_FROM_CART_ACTION = "removeFromCart"
const VIEW_CART_ACTION ="viewCart"

function viewCart() {
    console.log("Current book in the Cart", bookCart)
}

function performCartActions (action, newBook){
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;

        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log("Cart is empty")
            }
            else {
            const removedBook = book.Cart.pop()
            console.log(`Remove book from the Cart: ${removedBook}`)
            }        
            break;   

        case VIEW_CART_ACTION:
            viewCart()
            break;
            
        default:
            console.log("Invalid action. Please choose a vaid option")
    }
}

performCartActions(ADD_TO_CART_ACTION, "Never stop learning")
performCartActions(VIEW_CART_ACTION)

// hasta el momento la mejor forma de modificar arrays "Splice" - Modifica el array eliminando el que quieras y puedes añadir más elementos al arrays, es como un push + pop pero tu escoges en que posicion eliminar y empezar añadir

// el metodo reverse solo coloca los elementos del array en el orden contrario, es necesario ejecutarlo como funcion, tene en cuenta que modifica por completo la constante, si quieres mantener esos valores, deberas crear otra contante.

const numbers = [1,2,3,4,5]

const originalNumber = numbers.slice()
const reverseNumbers = numbers.reverse()

console.log(reverseNumbers)
console.log(originalNumber)
