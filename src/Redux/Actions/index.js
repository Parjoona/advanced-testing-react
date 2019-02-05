import { SAVE_COMMENT } from 'Redux/Actions/types'

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
} 