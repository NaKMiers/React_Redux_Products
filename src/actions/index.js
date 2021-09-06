import types from '../CONSTANTS/ActionTypes'

class Action {
   addToCart = (product, quantity) => ({
      type: types.ADD_TO_CART,
      product,
      quantity
   })
}

export default new Action()
