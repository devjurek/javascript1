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

// actualizacion, es mejor usar el metodo Map

const numbers = [1,2,3,4,5]

const originalNumber = numbers.slice()
const reverseNumbers = numbers.reverse()

console.log(reverseNumbers)
console.log(originalNumber)


// metodo map y slice

const number = [1,2,3,4,5]
const newNumber = number.map(num => num * num)
const newNumberReverse = number.slice().reverse()

console.log(number)
console.log (newNumber)
console.log(newNumberReverse)


// ejerecicio de convertir una temperatura de fahrenheit a celsius

const tpFarenhenint = [-15, 20, 15]
const tpCelsius = tpFarenhenint.map( fahrenheit => (5/9) * (fahrenheit-32) )

console.log (tpCelsius)
console.log (tpFarenhenint)


// lo mismo pero sin usar map (menos lineas de codigos, pero solo funciona con un valor)

const tpFarenhenin2t = -15
const tpCelsius2 = 5/9 * (tpFarenhenint-32)

console.log(tpFarenhenin2t)
console.log(tpCelsius2)

// suma de arrays con for each

const numb = [1,2,3,4,5]
let sum = 0

numb.forEach(number => {
    sum += number
})

console.log(numb)
console.log(sum)


// metodo filter

const numeroPares = [2,4,6,8,10]
const numeroFiltrado = numeroPares.filter(numero => numero > 5)


console.log (numeroFiltrado)

// metodo reduce

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

let wordsFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator [currentValue]){
        accumulator [currentValue]++
    }
    else {
        accumulator [currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordsFrecuency)

// Excersice: Ganador de una rifa

const winningParticipants = [
    {id: 1, name: "Unojose", ticketNumber:001},
    {id: 22, name: "Dosnielk", ticketNumber:0331},
    {id: 333, name: "Tresfijo", ticketNumber:0121},
    {id: 4444, name: "Cuatronale", ticketNumber:0351},
]

function findWinnerByname (name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || "No winner find with that name"
}

function findIndexWinnerByTicket (ticketNumber){
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1? index : "No winner find with that ticket number"
}

function displayWinnerInformation(winner){
    if (winner !== undefined && winner != null && winner !== "No winner found with tha ticket number") {
        console.log("Winnet information ", winner)
    }
}

const winnerByName = findWinnerByname("Dosnielk")
const indexWinnetByTicket = findIndexWinnerByTicket(015)

displayWinnerInformation(winnerByName)
console.log("Index of Winner by Ticket Number ", indexWinnetByTicket)




