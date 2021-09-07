import React, { Component } from 'react'
import message from '../CONSTANTS/message'

class CartItem extends Component {
   onAddToCart = (product, quantity) => {
      this.props.onAddToCart(product, quantity)
      this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS)
   }

   render() {
      let { onDeleteProductInCart, onChangeMessage, item } = this.props
      let { product, quantity } = item
      return (
         <tr>
            <th scope='row'>
               <img
                  src={product.image}
                  className='img-fluid z-depth-0'
                  alt=''
               />
            </th>
            <td>
               <h5>
                  <strong>{product.name}</strong>
               </h5>
            </td>
            <td>{product.price}$</td>
            <td className='center-on-small-only'>
               <span className='qty'>{quantity} </span>
               <div className='btn-group radio-group' data-toggle='buttons'>
                  <button
                     className='btn btn-sm btn-primary
                                 btn-rounded waves-effect waves-light'
                     onClick={() =>
                        this.onAddToCart(product, quantity > 1 ? -1 : 0)
                     }
                  >
                     <a href='/'>—</a>
                  </button>
                  <button
                     className='btn btn-sm btn-primary
                                 btn-rounded waves-effect waves-light'
                     onClick={() => this.onAddToCart(product, 1)}
                  >
                     <a href='/'>+</a>
                  </button>
               </div>
            </td>
            <td>{product.price * quantity}$</td>
            <td>
               <button
                  type='button'
                  className='btn btn-sm btn-primary waves-effect waves-light'
                  data-toggle='tooltip'
                  data-placement='top'
                  data-original-title='Remove item'
                  onClick={() => {
                     onDeleteProductInCart(product)
                     onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
                  }}
               >
                  X
               </button>
            </td>
         </tr>
      )
   }
}

export default CartItem
