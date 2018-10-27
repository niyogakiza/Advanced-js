const api =  './fakeApi'
const fetch = require('node-fetch')

// ==== Callback based web request =========
// const request = new XMLHttpRequest()
// request.open("GET", api)
//
// request.onload = () => {
//     const data = JSON.parse(this.responseText)
//     // console.log('xhr', data)
// }
//
// request.onerror = () => {
//     // console.log(onerror)
// }
//
// request.send()

// ========== new in es6 ====

fetch(api)
.then(response => response.json())
.then(data => console.log(data))
.catch((err) => {
    console.log(err)
})
