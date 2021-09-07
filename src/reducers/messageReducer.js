import types from '../CONSTANTS/ActionTypes'
import message from '../CONSTANTS/message'

let initialState = message.MSG_WELCOME

function messageReducer(state = initialState, action) {
   switch (action.type) {
      case types.CHANGE_MESSAGE:
         console.log(action)
         return action.message
      default:
         return state
   }
}

export default messageReducer
