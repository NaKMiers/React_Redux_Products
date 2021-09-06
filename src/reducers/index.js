import { combineReducers } from 'redux'
import products from './productsReducer'
import cart from './cartReducer'

const reducer = combineReducers({ products, cart })

export default reducer
