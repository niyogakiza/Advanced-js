 /*************************************************************
* Generators
* ***********************************************************/
const {log} = console
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]

 function* positiveNumbersUpTo(stop) {
    let current = 1
     while(current <= stop)
     yield current++
 }

 const [...numbers] = positiveNumbersUpTo(8) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 log(numbers)

//====================================================
 function* oneToThree() {
    yield 1;
    yield 2;
    yield 3;
 }

 const generatorObject = oneToThree();
log(generatorObject) // {}

 // ===== with Symbol =========

 function positiveNumbersUp(stop) { // this function not a generator
     const iterable = {
         [Symbol.iterator]() {
             let current = 1
             return {
                 next() {
                      if (stop < current) return {done: true}
                     return {done: false, value: current++}
                 }
             }
         }
     }
     return iterable
 }
const [...numbersTwo] = positiveNumbersUp(30)
 log(numbersTwo) // got [..., 30]

 //=====================================================
function* oneToFour(stop) {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
 }

 const [...four] = oneToFour()
 log(four) // [ 1, 2, 3, 4 ]

 // ==============================

 function* oneToFive(stop) {
    let current = 1;
    while(current <= stop)
    yield current++
 }
 const [...five] = oneToFive(5)
 log(five) // [ 1, 2, 3, 4, 5]

 /*
 * ========= A days generator =========*/

function* daysOfTheWeek(sunday) {
    monday = 1
    while(monday <= sunday)
    yield monday++
}
const [...aweek] = daysOfTheWeek(7)
 log(aweek) // [ 1, 2, 3, 4, 5, 6, 7 ]

 /*
 * ========= Month Date counter =====*/
 function* datesOfTheMonth(days) {
     for (let count = 0; count < days; count++){
         let day = new Date()
         day.setDate(day.getDate() + count)
         yield day
     }
}

const generatorDaysObject = datesOfTheMonth(5)
 log(generatorDaysObject.next())
      log(generatorDaysObject.next())
 const [...rest] = generatorDaysObject;
 log(rest) // it just starts where it has left off

 /*
 * === ============*/

 function* PersonQuery() {
     const Wes = { firstName: 'Wes', lastName: 'Bob'}
     const John = {firstName: 'John ', lastName: 'Bob'}
     const Alex = {firstName: 'Alex', lastName: 'Bob'}
     const Sam = {firstName: 'Sam', lastName: 'Bob'}
     const George = {firstName: 'George', lastName: 'Bob'}

     yield Wes;
     yield John;
     yield Alex;
     yield Sam;
     yield George
 }

 const query = PersonQuery();
 log(query.next())
 log(query.next())
 log(query.next())
 log(query.next())
 log(query.next())
 log(query.next())

