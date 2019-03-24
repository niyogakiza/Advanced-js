 /*************************************************************
* Redux Store
* ***********************************************************/

function createStore(reducer, initialState) {
    let state = initialState
    let subscribers = []

    function getState() {
        return state
    }

    function subscribe(cb) {
        subscribers.push(cb)
    }

    function dispatch(action) {
        state = reducer(state, action)
        subscribers.forEach(sub => {
            sub()
        })
    }
    return {
        getState,
        subscribe,
        dispatch
    }
}

 let reducer = require('./Reducer')
 let store = createStore(reducer, 0)
 store.subscribe(() => {
     console.log(`Current state: ${store.getState()}`)
 })
 store.dispatch({ type: 'INCREMENT_COUNT'})
 store.dispatch({ type: 'INCREMENT_COUNT'})
 store.dispatch({ type: 'INCREMENT_COUNT'})

 /*
 * ==== OutPut ====
 * Current state: 1
   Current state: 2
   Current state: 3
   ==================*/
// formatDisabledDates = () => {
  //   return this.props.disabledDays.map(date =>
  //     moment.unix(date).format(formattedDates)).reduce((object, date) => {
  //     return {
  //       ...object,
  //       [date]: { disabled: true, textColor: 'grey' } }
  //   }, {})
  // }
   const dayConverted = (day1, day2) => {
    const formattedDates = 'YYYY-MM-DD'
    const dayUnixFormat = moment(day1.dateString).format('X')
    const todayFormat = (day1) => moment.unix(day1).format(formattedDates)
    const converted = todayFormat(day2.date)
    return converted === todayFormat(dayUnixFormat)
  }
