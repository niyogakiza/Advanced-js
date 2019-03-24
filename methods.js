const worldString = 'Hello'
const someString = 'Sir'

console.log(worldString.concat(' ', someString))
/*
console.log(worldString.small())
console.log(worldString.big())
console.log(worldString.fontsize(27))
console.log(worldString.blink())
*/

const array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));
// console.log(array1.copyWithin(0, 1, 2));
console.log(array1.copyWithin(0, 1, 5));
// expected output: Array [4, 2, 3, 4, 5]

const map1 = new Map();
map1.set('bar', 'foo');

// console.log(map1.delete('bar'));
// console.log(map1.has('bar'));

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true
