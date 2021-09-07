import types from '../CONSTANTS/ActionTypes'

class Action {
   addToCart = (product, quantity) => ({
      type: types.ADD_TO_CART,
      product,
      quantity
   })

   changeMessage = message => ({ type: types.CHANGE_MESSAGE, message })

   deleteProductInCart = product => ({
      type: types.DELETE_PRODUCT_IN_CART,
      product
   })
}

export default new Action()
