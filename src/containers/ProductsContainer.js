import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import PropTypes from 'prop-types'
import Products from '../components/Products'
import Product from '../components/Product'

class ProductsContainer extends Component {
   showProducts = products => {
      let { onAddToCart, onChangeMessage } = this.props
      return products.map(product => (
         <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
         />
      ))
   }

   render() {
      let { products } = this.props
      return <Products products={this.showProducts(products)} />
   }
}

ProductsContainer.propTypes = {
   products: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         image: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.string.isRequired,
         inventory: PropTypes.string.isRequired,
         rating: PropTypes.number.isRequired
      })
   ).isRequired,
   onAddToCart: PropTypes.func.isRequired,
   onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ products: state.products })

const mapDispatchToProps = dispatch => ({
   onAddToCart: (product, quantity) =>
      dispatch(actions.addToCart(product, quantity)),
   onChangeMessage: message => dispatch(actions.changeMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
