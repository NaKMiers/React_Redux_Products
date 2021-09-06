import React, { Component } from 'react'

class Products extends Component {
   render() {
      let { products } = this.props
      return (
         <section className='section'>
            <h1 className='section-heading'>Danh Sách Sản Phẩm</h1>
            <div className='row'>{products}</div>
         </section>
      )
   }
}

export default Products
