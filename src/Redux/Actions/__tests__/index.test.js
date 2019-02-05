import { saveComment } from 'Redux/Actions'
import { SAVE_COMMENT } from 'Redux/Actions/types'

describe('saveComment', () => {
  it('Has correct type', () => {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('Has correct payload', () => {
    const action = saveComment('New comment')

    expect(action.payload).toEqual('New comment')
  })
})