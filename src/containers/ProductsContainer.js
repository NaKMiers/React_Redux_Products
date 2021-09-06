import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Products from '../components/Products'
import Product from '../components/Product'

class ProductsContainer extends Component {
   showProducts = products => {
      return products.map(product => (
         <Product key={product.id} product={product} />
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
   ).isRequired
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps, null)(ProductsContainer)
