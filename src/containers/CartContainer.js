import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import message from '../CONSTANTS/message'

class CartContainer extends Component {
   showCartItem = cart => {
      let result = (
         <tr>
            <th>{message.MSG_CART_EMPTY}</th>
         </tr>
      )
      if (cart.length > 0) {
         result = cart.map((item, index) => (
            <CartItem key={index} item={item} />
         ))
      }
      return result
   }

   showTotal = cart => {
      let total = cart.reduce((total, item) => {
         return total + item.product.price * item.quantity
      }, 0)

      return <CartResult total={total} />
   }

   render() {
      let { cart } = this.props
      return (
         <Cart>
            {this.showCartItem(cart)}
            {this.showTotal(cart)}
         </Cart>
      )
   }
}

CartContainer.propTypes = {
   cart: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            inventory: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
         }).isRequired,
         quantity: PropTypes.number.isRequired
      })
   ).isRequired
}

const mapStateToProps = state => ({ cart: state.cart })

export default connect(mapStateToProps, null)(CartContainer)
