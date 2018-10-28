
function add (...values) {
    return values.reduce((memo, value) => {
        return memo + value
    })
}

const result = add(2, 4, 5)
console.log(result) // 11

//============ slice ================

function talk(greeting, farewell) {
    const args = Array.prototype.slice.call(arguments, 2)
    console.log(args)
}

talk('hello', 'goodbye', 'bill', 'joe', 'morty') // [ 'bill', 'joe', 'morty' ]


// ============= spread ===============

function talk3(greeting, farewell, ...names) {
    console.log(names)
}

talk3('hello', 'goodbye', 'bill', 'joe', 'morty') // [ 'bill', 'joe', 'morty' ]


function talk4(greeting, farewell, ...names) {
    names.forEach((name) => {
        console.log(`${greeting} ${name}!`)
        console.log(`${farewell} ${name}!`)
    })
}

talk4('hello', 'goodbye', 'bill', 'joe', 'morty')
