const transactions = [
    {id: 1,description:"Grocery Shopping", amount: -50},
    {id: 2,description:"Salary Deposit", amount: 2000},
    {id: 3,description:"Dog toys", amount: -50},
    {id: 4,description:"Family bussiness", amount: 500},
    {id: 5,description:"Monthly Expenses", amount: -1000},
    {id: 6,description:"Personal Brand", amount: 500},
    ]


//Calculate total balance
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log("Total Balance: ", totalBalance)

//Find the largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log("Largest Transaction ", largestTransaction)

// Filter purchase transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log("Purchase Transactions: ", purchaseTransactions)

//Find a transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === "Personal Brand")
console.log("Specific Transaction: ",specificTransaction)

//Find the index of a transaction by amount

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -1000)
console.log("Index Transaction With Amount -50$: ", indexTransactionWithAmount)

//Update Transaction Descriptions

transactions.forEach(transaction => {
    if(transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `income: ${transaction.description}`
    }
})

console.log("Update Transactions :", transactions)

// concat (por serparado) y join (juntos) sirve para unir arrays

// every, funciona para comprobar una condicion en todos los elementos del arrays, si es true or false

//some, similar a every, pero se cumple la condicion si al menos 1 elemento del array es true.

//include, para saber si existe un elemento en un arrays

// indexOf, para saber el indice de un elemento en un array

//lastIndexOf, para saber el ultimo indice del array

// sprearOperator, sirve para copiar un array