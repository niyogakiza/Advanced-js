 /*************************************************************
*  Redux Reducer
* ***********************************************************/

let initialState = 0

function reducer(state=initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1
        default:
            return state
    }
}

// let state = reducer(0, {type: 'INCREMENT_COUNT'})
// console.log(state) // 1
//
//  const result = reducer(state, {type: 'INCREMENT_COUNT'})
// console.log(result) // 2

 module.exports = reducer
