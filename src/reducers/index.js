import { combineReducers } from 'redux'
import products from './productsReducer'
import cart from './cartReducer'
import message from './messageReducer'

const reducer = combineReducers({ products, cart, message })

export default reducer
