import React, { Component } from 'react'

class CartItem extends Component {
   render() {
      let { item } = this.props
      return (
         <tr>
            <th scope='row'>
               <img
                  src={item.product.image}
                  className='img-fluid z-depth-0'
                  alt=''
               />
            </th>
            <td>
               <h5>
                  <strong>{item.product.name}</strong>
               </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className='center-on-small-only'>
               <span className='qty'>{item.quantity} </span>
               <div className='btn-group radio-group' data-toggle='buttons'>
                  <label
                     className='btn btn-sm btn-primary
                                 btn-rounded waves-effect waves-light'
                  >
                     <a href='/'>—</a>
                  </label>
                  <label
                     className='btn btn-sm btn-primary
                                 btn-rounded waves-effect waves-light'
                  >
                     <a href='/'>+</a>
                  </label>
               </div>
            </td>
            <td>{item.product.price * item.quantity}$</td>
            <td>
               <button
                  type='button'
                  className='btn btn-sm btn-primary waves-effect waves-light'
                  data-toggle='tooltip'
                  data-placement='top'
                  data-original-title='Remove item'
               >
                  X
               </button>
            </td>
         </tr>
      )
   }
}

export default CartItem
