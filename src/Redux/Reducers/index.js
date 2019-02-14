import { combineReducers } from 'redux'
import commentsReducer from 'Redux/Reducers/comments'
import authReducer from 'Redux/Reducers/auth'

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
})