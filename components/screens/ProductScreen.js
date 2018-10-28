import React, {Component} from 'react'
import { connect } from 'react-redux'
import Product from '../Product'


class ProductScreen  extends Component{

    componentDidMount () {
        console.log('component mount')
    }

    render() {
        return(
            <section>
            {products.map(product => <Product
                key={product.id}
                {...product}
                handleClick={handleClick}
                />
            )}
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }

}

const mapDispatchToProps = dispatch => {
    return{
        handleClick (id) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)

