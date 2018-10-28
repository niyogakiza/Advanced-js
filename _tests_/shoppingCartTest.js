/*************************************************************
* Testing reducers
* ***********************************************************/
import shoppingCart from "../largerstatetree";
import { expect } from 'chai' // this is mocha

 describe('shoppingCart reducer', () => {
     it('can add new products', () => {
         expect(
             shoppingCart([], {type: 'ADD_TO_CART', payload: 22})
         ).to.eql([22])
     })

     it('can remove products', () => {
         let state = []
         state = shoppingCart(state, {type: 'ADD_TO_CART', payload: 22})
         expect(
             shoppingCart(state, {type: 'REMOVE_TO_CART', payload: 22})
         ).to.eql([])
     })
 })


/*************************************************************
* Testing action creator
* ***********************************************************/

import {addToCart} from ''

describe('addToCart', () => {
    it('will return an action object of type ADD_TO_CART', () => {
        expect(addToCart(22).type).to.eql('ADD_TO_CART')
    })

    it('will return an action object with a payload of 22 when passed 22', () => {
        expect(addToCart(22).payload).to.eql(22)
    })
})
