 /*************************************************************
* Functions
* ***********************************************************/

//=========== Pure functions, are used in reducers ==================

function add (x, y) {
    return x + y
}

add(2, 4) // 6
add(2, 4) // 6

function addAToArrayPure (array, element) {
    return array.concat(element)
    // or
    // return [...array,element]
}

let names = ['tim', 'charlie', 'sue']
let result = addAToArrayPure(names,  'bob')
console.log(result) // [ 'tim', 'charlie', 'sue', 'bob' ]
console.log(names) // [ 'tim', 'charlie', 'sue' ]

function addToObjPure(obj, prop, value) {
    return Object.assign({}, obj, {
        [prop]: value
    })
    // or
    //  return {
    //      ...obj,
    //      [prop]: value
    //  }
}
let person = {
    name: 'tim'
}
let result2 = addToObjPure(person,  'age', 20)
console.log(result2) // { name: 'tim', age: 20 }


// ============= Impure functions =================

let timesCalled = 0
function addImpure(x, y) {
    return `Times Called: ${++timesCalled} Results: ${x + y}`
    //return x + y
}
console.log(addImpure(2, 4))// Times called: 1 Result 6
console.log(addImpure(2, 4))// Times called: 1 Result 6

function addToArrayImpure(array, element) {
    array.push(element)
}

function addObjToImpure(obj, prop, value) {
    obj[prop] = value
    return obj
}
