/*************************************************************
* Testing Components
* ***********************************************************/
import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import ProductScreen from "../components/screens/ProductScreen";
import {Product} from "../components/Product";

describe('<Products />', () => {
    it('should respond to click events', () => {
        let handleClick = sinon.spy()
        let wrapper = shallow(<ProductScreen handleClick={handleClick}/>)
        wrapper.find('button').simulate('click')
        expect(handleClick.calledOnce).to.equal(true)
    })

    it('should render a product description', () => {
        let description = 'lorem ipsum'
        let wrapper = shallow(<Product description={description}/>)
        expect(
            wrapper.find('p').text()
        ).to.eql(description)
    })

    it('will call componentDidMount', () => {
        sinon.spy(ProductScreen.prototype, 'componentDidMount')
        let wrapper = mount(<ProductScreen/>)
        expect(ProductScreen.prototype.componentDidMount).to.have.property('callCount', 1)
        ProductScreen.prototype.componentDidMount.restore()
    })
})
