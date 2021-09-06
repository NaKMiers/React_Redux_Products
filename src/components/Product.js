import React, { Component } from 'react'

class Product extends Component {
   showRating = rating => {
      let amountRating = []
      for (let i = 0; i < rating; i++) {
         amountRating.push(
            <li key={i} className='can-interact'>
               <i className='fa fa-star' />
            </li>
         )
      }
      for (let i = 0; i < 5 - rating; i++) {
         amountRating.push(
            <li key={4 - i} className='can-interact'>
               <i className='fa fa-star-o' />
            </li>
         )
      }
      return amountRating
   }

   render() {
      let { product } = this.props
      return (
         <div className='col-lg-4 col-md-6 mb-r'>
            <div className='card text-center card-cascade narrower'>
               <div className='view overlay hm-white-slight z-depth-1'>
                  <img src={product.image} className='img-fluid' alt='' />
                  <a href='/'>
                     <div className='mask waves-light waves-effect waves-light' />
                  </a>
               </div>
               <div className='card-body'>
                  <h4 className='card-title'>
                     <strong>
                        <a href='/'>{product.name}</a>
                     </strong>
                  </h4>
                  <ul className='rating'>{this.showRating(product.rating)}</ul>
                  <p className='card-text'>{product.description}</p>
                  <div className='card-footer'>
                     <span className='left'>{product.price}$</span>
                     <span className='right'>
                        <a
                           href='/'
                           className='btn-floating blue-gradient'
                           data-toggle='tooltip'
                           data-placement='top'
                           data-original-title='Add to Cart'
                        >
                           <i className='fa fa-shopping-cart' />
                        </a>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Product
