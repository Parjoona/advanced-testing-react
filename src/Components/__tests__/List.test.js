import React from 'react'
import { mount } from 'enzyme'

import List from 'Components/List/List'
import Store from 'Store'

let wrapper

beforeEach(() => {
  const initialState = {
    comments: [
      'Comment one',
      'Comment two',
      'Comment three'
    ]
  }

  wrapper = mount(
    <Store initialState={initialState}>
      <List />
    </Store>
  )
})

it('Should create one LI per comment', () => {

})