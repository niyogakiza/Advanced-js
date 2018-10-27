
// Destructuring in es6
const person = {
    firstName: 'Samuela',
    lastName: 'Mazzucchelli',
    address: {
        city: 'London',
        country: 'UK',
        lines: [
            "129 ascote lane",
            "Apt 24"
        ]
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const { address: {lines: [, line2]}} = person

//console.log(person.fullName()) // Samuela Mazzucchelli
//console.log(line2) // ApT 24


//spread operator ================================================
const computeTax = (taxRate, ...prices) =>{
    return prices.map(p => p * taxRate)
}

//console.log(computeTax(3, 6, 2, 5)) // [18, 6, 15]
//===================================================================
const parseName = (name) => {
    const nameParser = /([^,]*),\s*(.*)/;
    if (!nameParser.test(name)){
        return [false]
    }

    const [, last, first] = name.match(nameParser)
    return [true, last,  first]
}
//===================================================================

/*
* Default on pattern matching
* */
const numbers = [1, 2, 3, 4, 5]
const numbers1 = undefined
const number2 = [1, 3, undefined, 4, 6, 7]

const prices = [1.10, 2.32, 6.67, 4.90]
const taxRates = 0.07


const orders = [
    {desc: "Pencils", price: 1.50, quantity: 2},
    {desc: "Notepads", price: 6.00, quantity: 3},
    {desc: "Paperclips", price: 4.30}
]

// function sum(numbers) {
//     numbers =  numbers || []
//     let sum = 0;
//     for (let index = 0; index <numbers.length; index++) {
//         sum += numbers[index] || 0
//     }
//     return sum
// }
// console.log(sum(numbers)) // 15
// console.log(sum(numbers1)) // 0 because of ||
// console.log(sum(number2)) // NaN but if you add || 0 on sum will output 21

// default values in es 6
function sum(numbers = []) {
    let sum = 0;
    for (const number of numbers) {
        sum += number || 0
    }
    return sum
}

const map = number2.map(n => n )

const listOfPrice = orders.map(({price, quantity = 1}) => price * quantity)

// Or

const listOfPrice2 = orders.map((order) => {
    if (order.quantity === undefined) order.quantity = 1
    return order.price * order.quantity
})

console.log('LIST OF PRICE2:', listOfPrice2)
console.log( 'lIST OF PRICE:',listOfPrice)
console.log(map)// you get array back [ 1, 3, undefined, 4, 6, 7 ]
console.log(sum(map), 'from map')
console.log(sum(numbers))
console.log(sum(numbers1))
console.log(sum(number2))
