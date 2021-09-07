import types from '../CONSTANTS/ActionTypes'

let initialState = getData() ? getData() : []

function getData() {
   return JSON.parse(localStorage.getItem('CART'))
}
function setData(data) {
   return localStorage.setItem('CART', JSON.stringify(data))
}
function findIndex(productId, cart) {
   let index = -1
   cart.forEach((item, i) => {
      if (item.product.id === productId) index = i
   })
   return index
}

function cartReducer(state = initialState, action) {
   let { product, quantity } = action
   let index = -1
   switch (action.type) {
      case types.ADD_TO_CART:
         index = findIndex(product.id, state)
         if (index !== -1) {
            state[index].quantity += quantity
         } else {
            state.push({ product, quantity })
         }
         setData(state)
         return [...state]

      case types.DELETE_PRODUCT_IN_CART:
         index = findIndex(product.id, state)
         if (index !== -1) {
            state.splice(index, 1)
         }
         setData(state)
         return [...state]

      default:
         return state
   }
}

export default cartReducer
