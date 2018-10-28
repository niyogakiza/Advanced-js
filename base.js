const numbers = [1, 2, 3, 4, 5, 6]

// ============ filter ===========

const evens = numbers.filter((number) => {
    return number % 2 === 0
})

console.log(evens) // [ 2, 4, 6 ]

//================= map ==================

const byHundred = evens.map((number) => {
    return number + 100
})

console.log(byHundred)// [ 102, 104, 106 ]

// or
const even = numbers.filter((number) => {
    return number % 2 === 0
}).map((number) => {
    return number / 2
})

console.log(even) // [ 1, 2, 3 ]

// =========== Reduce ===========

const sum = numbers.reduce((memo, value) => {
    return memo + value
}, 0)

console.log(sum) // 21

// ==========   ===========








