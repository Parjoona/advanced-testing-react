import commentsReducer from 'Redux/Reducers/comments'
import { SAVE_COMMENT } from 'Redux/Actions/types'

it('Handles actions of type SAVE_COMMENT', () => {
  const action = { 
    type: SAVE_COMMENT,
    payload: 'New comment'
  }

  const state = commentsReducer([], action)
  expect(state).toEqual(['New comment'])
})

it('Handles action with unknown type', () => {
  const state = commentsReducer([], {})

  expect(state).toEqual([])
})