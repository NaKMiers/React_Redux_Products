import React, { Component } from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps, null)(ProductsContainer)
