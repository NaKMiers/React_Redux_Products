import { combineReducers } from 'redux'
import products from './productsReducer'

const reducer = combineReducers({ products })

export default reducer
