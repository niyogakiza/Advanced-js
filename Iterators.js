
/*************************************************************
* Iterables
* ***********************************************************/
const {log} = console

const set = new Set([1, 2, 3, 4, 4, 5, 5, 6, 6]) // Set { 1, 2, 3, 4, 5, 6 }
log(set)

function PersonQuery() {
    const wes = {first: 'Wes', last: 'Higbee'}
    const pax = {first: 'Sam', last: 'James'}
    const jonathan = {first: 'Jonathan', last: 'Ol'}

    // let nextPerson = wes;
    // this.nextPerson = function () {
    //     switch (nextPerson) {
    //         case wes:
    //             nextPerson = pax
    //             return { value: wes,  done: false}
    //         case pax:
    //             nextPerson = jonathan
    //             return { value: pax, done: false}
    //         case jonathan:
    //             nextPerson = undefined
    //             return {value: jonathan, done: false}
    //     }
    //     return {done: true}
    // }

    // ==========  with create  and Symbol iterator ==========

this.createIterator = function () {

    let nextPerson = wes;

      next = () => {
        switch (nextPerson) {
            case wes:
                nextPerson = pax
                return { value: wes,  done: false}
            case pax:
                nextPerson = jonathan
                return { value: pax, done: false}
            case jonathan:
                nextPerson = undefined
                return {value: jonathan, done: false}
        }
        return {done: true}
    }
    return { next }
  }

  // this[Symbol.iterator] = this.createIterator // this is with Symbol iterator

}

 const query = new PersonQuery().createIterator()
log(query.next())
log(query.next())
log(query.next())
log(query.next())


