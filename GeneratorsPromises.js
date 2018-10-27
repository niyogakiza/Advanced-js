 /*************************************************************
* Generators with callBacks
* ***********************************************************/

 const api = './fakeApi'

 // ====== Parsing the data when resuming generator =======

const {log} = console

function* datesOfTheMonth(days) {
     for (let count = 0; count < days; count++){
         let day = new Date()
         day.setDate(day.getDate() + count)
         const skip = yield day
         count += skip || 0
     }
}

const days = datesOfTheMonth(15)
 log(days.next())
 log(days.next(5)) // to next 5 days
 log(days.next())
 log(days.next())
 /*
 * { value: 2018-10-27T17:27:36.118Z, done: false }
   { value: 2018-11-02T18:27:36.121Z, done: false } to next 5 days
*/

 // ====== Yield Promises =====

 function* program () {
     const requestPromise = fetch(api)
     const response = yield requestPromise

     const parsePromise = response.json()
     const data = yield parsePromise

     console.log(data)
 }

 async(program).catch((err) => err)

 // ====== Generator control flow with delay ======

 // setTimeout
 delay(500)
 .then(() => code.innerText = message[1])
 .then(() => delay(500))
 .then(() => code.innerText = message[2])
 .then(() => delay(500))
 .then(() => code.innerText = message[3])
 .then(() => delay(500))
 .then(() => code.innerText = message[4])

 // with generators
 yield delay(500);
 code.innerText = message[1]
 yield delay(500);
 code.innerText = message[2]
 yield delay(500);
 code.innerText = message[3]
 yield delay(500);
 code.innerText = message[4]
