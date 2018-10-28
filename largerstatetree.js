 /*************************************************************
* Larger State Tree
* ***********************************************************/
// import { ADD_TO_CART, CHANGE_CATEGORY, REMOVE_FROM_CART} from "./constants";

 const ADD_TO_CART = 'ADD_TO_CART'
 const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
 const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
 const ADD_PRODUCT = 'ADD_PRODUCT'


 let initialState = {
    activeCategory: 'food',
     products: [
         {id: 192, name:'pizza', cost: 10, category: 'food'},
         {id: 194, name:'apples', cost: 5, category: 'food'},
         {id: 195, name:'tv', cost: 1000, category: 'electronics'},
         {id: 196, name:'orange', cost: 300, category: 'food'}
     ],
     shoppingCart: [

     ]
}

function reducer(state= initialState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case ADD_TO_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(productId => productId !== action.payload )
            }
        default:
            return state
    }
}

let category = reducer(initialState, {type: CHANGE_CATEGORY, payload: 'electronics'})
//  console.log(category)
/*
* === output========
* { activeCategory: 'electronics',
  products:
   [ { id: 192, name: 'pizza', cost: 10, category: 'food' },
     { id: 194, name: 'apples', cost: 5, category: 'food' },
     { id: 195, name: 'tv', cost: 1000, category: 'electronics' },
     { id: 196, name: 'orange', cost: 300, category: 'food' } ],
  shoppingCart: [] }
*/

let addProduct = reducer(initialState, {type: ADD_PRODUCT, payload: {id: 500, name: 'pear', cost: 2, category: 'food'}})
 // console.log(addProduct)

 /*======== output ==========
 *
 * { activeCategory: 'food',
  products:
   [ { id: 192, name: 'pizza', cost: 10, category: 'food' },
     { id: 194, name: 'apples', cost: 5, category: 'food' },
     { id: 195, name: 'tv', cost: 1000, category: 'electronics' },
     { id: 196, name: 'orange', cost: 300, category: 'food' },
     { id: 500, name: 'pear', cost: 2, category: 'food' } ], // added product
  shoppingCart: [] }
*/

 let addToCart = reducer(initialState, {type: ADD_TO_CART, payload: 192})
 addToCart = reducer(addToCart, {type: ADD_TO_CART, payload: 194})
 // console.log(addToCart)

 /*======= added to cart ==========
 * { activeCategory: 'food',
  products:
   [ { id: 192, name: 'pizza', cost: 10, category: 'food' },
     { id: 194, name: 'apples', cost: 5, category: 'food' },
     { id: 195, name: 'tv', cost: 1000, category: 'electronics' },
     { id: 196, name: 'orange', cost: 300, category: 'food' } ],
  shoppingCart: [ 192, 194 ] } // added productId
*/

 let removeToCart = reducer(addToCart, {type: REMOVE_FROM_CART, payload: 194})
 console.log(removeToCart)

 /*========= removed from the cart =========
 * { activeCategory: 'food',
  products:
   [ { id: 192, name: 'pizza', cost: 10, category: 'food' },
     { id: 194, name: 'apples', cost: 5, category: 'food' },
     { id: 195, name: 'tv', cost: 1000, category: 'electronics' },
     { id: 196, name: 'orange', cost: 300, category: 'food' } ],
  shoppingCart: [ 192 ] } // productId 194
*/

  /****************************************************************************
* Refactoring Larger State Tree; so that reducers can be in there single file
* *****************************************************************************/

  let initialState1 = 'food'
 function activeCategory(state=initialState1, action) {
     switch (action.type) {
         case CHANGE_CATEGORY:
             return action.payload
         default:
             return state
     }
 }

 //===========================================================

 let initialState2 = [
         {id: 192, name:'pizza', cost: 10, category: 'food'},
         {id: 194, name:'apples', cost: 5, category: 'food'},
         {id: 195, name:'tv', cost: 1000, category: 'electronics'},
         {id: 196, name:'orange', cost: 300, category: 'food'}
     ]
 function products(state=initialState2, action) {
     switch (action.type) {
         default:
             return state
     }
 }

 //====================================================================

 let initialState3 = []
 function shoppingCart(state=initialState3, action) {
     switch (action.type) {
         case ADD_TO_CART:
             return [...state, action.payload]
         case REMOVE_FROM_CART:
             return state.filter(id => id !== action.payload)
         default:
             return state
     }
 }

 // ***************** example when is in it's single file ****************************
 //let initialState = []
 export default function shoppingCart(state=initialState, action) {
     switch (action.type) {
         case ADD_TO_CART:
             return [...state, action.payload]
         case REMOVE_FROM_CART:
             return state.filter(id => id !== action.payload)
         default:
             return state
     }
 }

 // ============= reducers in store  ================================================
 // function reducer(state=initialState, action) {
 //     return {
 //         activeCategory: activeCategory(state, action),
 //         products: products(state, action),
 //         shoppingCart: shoppingCart(state, action)
 //     }
 // }

 // ******************* or  with combine-reducer ************************************

 /*import { combineReducers} from 'redux'
 // import all reducers inside this file

 export default function reducer(state, action) {
      combineReducers(activeCategory, products, shoppingCart)
 }*/
