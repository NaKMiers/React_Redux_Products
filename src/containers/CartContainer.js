import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import message from '../CONSTANTS/message'
import actions from '../actions'

class CartContainer extends Component {
   showCartItem = cart => {
      let result = (
         <tr>
            <th>{message.MSG_CART_EMPTY}</th>
         </tr>
      )

      let { onDeleteProductInCart, onChangeMessage, onAddToCart } = this.props
      if (cart.length > 0) {
         result = []
         for (let i = 0; i < cart.length; i++) {
            if (cart[i].quantity > 0) {
               result.push(
                  <CartItem
                     key={i}
                     item={cart[i]}
                     onDeleteProductInCart={onDeleteProductInCart}
                     onChangeMessage={onChangeMessage}
                     onAddToCart={onAddToCart}
                  />
               )
            }
         }
      }
      return result
   }

   showTotal = cart => {
      let total = cart.reduce((total, item) => {
         return total + item.product.price * item.quantity
      }, 0)

      return total ? <CartResult total={total} /> : <tr></tr>
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

const mapDispatchToProps = dispatch => ({
   onDeleteProductInCart: product =>
      dispatch(actions.deleteProductInCart(product)),
   onChangeMessage: message => dispatch(actions.changeMessage(message)),
   onAddToCart: (product, quantity) =>
      dispatch(actions.addToCart(product, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
