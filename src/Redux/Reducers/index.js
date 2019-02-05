import { combineReducers } from 'redux'
import commentsReducer from 'Redux/Reducers/comments'

export default combineReducers({
  comments: commentsReducer
})